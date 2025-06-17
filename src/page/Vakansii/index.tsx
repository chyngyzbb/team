import "./Vakansii.css";

function Vakansii() {
  return (
    <div className="vacancies-page container">
      <div className="vacancies-container">
        <h2 className="vacancies-title">Вакансии</h2>
        <div className="vacancies-grid">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="vacancy-card">
              <h3 className="vacancy-position">Должность</h3>
              <div className="vacancy-section">
                <p className="vacancy-label">Требования</p>
                <p className="vacancy-text">
                  Текст про требования текст про требования текст про требования
                </p>
              </div>
              <div className="vacancy-section">
                <p className="vacancy-label">Обязанности</p>
                <p className="vacancy-text">
                  Текст про обязанности текст про обязанности текст про
                  обязанности
                </p>
              </div>
              <div className="vacancy-section">
                <p className="vacancy-label">Условия</p>
                <p className="vacancy-text">
                  Текст про условия текст про условия текст про условия
                </p>
              </div>
              <div className="vacancy-contact">
                <span>📞</span>
                <span>+7 904 221 35 90</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Vakansii;
