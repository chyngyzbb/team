import React from "react";
import "./Kontakty.css";
function Contacts() {
  return (
    <section className="contacts">
      <h2>Контакты</h2>
      <p className="description">
        Свяжитесь с нами удобным для вас способом. Мы всегда рады помочь!
      </p>

      <div className="contact-info">
        <div className="item">
          <strong>📍 Адрес:</strong>
          <p>г. Бишкек, ул. Тыныстанова, 123</p>
        </div>
        <div className="item">
          <strong>📞 Телефон:</strong>
          <p>+996 (312) 123-456</p>
        </div>
        <div className="item">
          <strong>📧 Электронная почта:</strong>
          <p>info@severyanochka.kg</p>
        </div>
        <div className="item">
          <strong>🕒 Время работы:</strong>
          <p>
            Пн - Сб: 9:00 - 18:00 <br /> Вс: выходной
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
