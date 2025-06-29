import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import axios from "axios";

const SearchAI = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  

  // const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const fetchAnswer = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Суралган продукт: ${query}. Продукт тууралуу кыскача маалымат берип, эмне экенин түшүндүр.`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );
      setAnswer(response.data.choices[0].message.content);
    } catch (error) {
      console.error("AI суроодо ката кетти:", error);
      setAnswer("Ката кетти. Кайра аракет кылып көрүңүз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow-xl bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          🤖 AI Поисковик
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Продукт изде..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={fetchAnswer}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Издөө
          </button>
        </div>
        <div className="mt-4 min-h-[100px] bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
          {loading ? "Жүктөлүүдө..." : answer || "Жооп бул жерге чыгат"}
        </div>
    
      </div>

      <Footer />
    </>
  );
};

export default SearchAI;
