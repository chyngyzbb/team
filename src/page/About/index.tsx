import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./About.css";

function About() {
  return (
    <>
      <Header />
      <div className="about container">
        <div className="about-container">
          <h2 className="about-title">О компании</h2>
          <p className="about-highlight">
            Мы непрерывно развиваемся и работаем над совершенствованием сервиса,
            заботимся о наших клиентах, стремимся к лучшему будущему.
          </p>

          <div className="about-grid">
            <div>
              <p className="about-subtitle">
                Мы занимаемся розничной торговлей
              </p>
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
      <Footer />
    </>
  );
}

export default About;
