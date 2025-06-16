import React, { useState } from "react";


// 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
// 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
const API_KEY = "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"; // 🛑 Мына бул жерге өзүңүздүн OpenAI API ачкычыңызды коюңуз

const AIChat = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAnswer = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [{ role: "user", content: query }],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const message = data?.choices?.[0]?.message?.content || "Жооп табылган жок.";
      setAnswer(message);
    } catch (error) {
      setAnswer("Ката кетти: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">🤖 AI Поисковик</h1>
        <div className="space-y-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Суроо жазыңыз..."
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={fetchAnswer}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Жүктөлүүдө..." : "Жооп алуу"}
          </button>
        </div>
        {answer && (
          <div className="bg-gray-100 p-4 rounded-xl text-gray-800 whitespace-pre-wrap">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIChat;
