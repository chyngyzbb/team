// import React from "react";
// import "./About.css";

// function About() {
//   return (
//     <div className="bg-[#fff6e9] text-[#333] font-sans">
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold mb-4">О компании</h2>
//         <p className="text-lg text-orange-600 font-semibold mb-8">
//           Мы непрерывно развиваемся и работаем над совершенствованием сервиса,
//           заботимся о наших клиентах, стремимся к лучшему будущему.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8 mb-8">
//           <div>
//             <p className="font-semibold mb-2">
//               Мы занимаемся розничной торговлей
//             </p>
//             <p className="text-gray-700">Более 20 лет.</p>
//           </div>
//           <div>
//             <p className="font-semibold mb-2">Основная миссия компании</p>
//             <p className="text-gray-700">
//               Максимальное качество товаров и услуг по доступной цене.
//             </p>
//           </div>
//           <div>
//             <p className="font-semibold mb-2">Отличительная черта нашей сети</p>
//             <p className="text-green-700 font-bold">
//               Здоровая и полезная продукция местного производства в наших
//               магазинах.
//             </p>
//           </div>
//         </div>

//         <div className="bg-green-100 text-green-700 text-center py-4 rounded-xl font-semibold">
//           Спасибо за то, что вы с нами. Северяночка, везет всегда!
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h2 className="about-title">О компании</h2>
        <p className="about-highlight">
          Мы непрерывно развиваемся и работаем над совершенствованием сервиса,
          заботимся о наших клиентах, стремимся к лучшему будущему.
        </p>

        <div className="about-grid">
          <div>
            <p className="about-subtitle">Мы занимаемся розничной торговлей</p>
            <p className="about-text">Более 20 лет.</p>
          </div>
          <div>
            <p className="about-subtitle">Основная миссия компании</p>
            <p className="about-text">
              Максимальное качество товаров и услуг по доступной цене.
            </p>
          </div>
          <div>
            <p className="about-subtitle">Отличительная черта нашей сети</p>
            <p className="about-text highlight-green">
              Здоровая и полезная продукция местного производства в наших
              магазинах.
            </p>
          </div>
        </div>

        <div className="about-footer">
          Спасибо за то, что вы с нами{" "}
          <img
            src="https://img.icons8.com/?size=24&id=zkTZNXGR64dz&format=png"
            alt="heart"
            className="icon-inline"
          />
          !
        </div>
      </div>
    </div>
  );
}

export default About;
