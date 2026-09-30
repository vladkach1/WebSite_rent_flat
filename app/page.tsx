import Link from "next/link";
import { apartments } from "./lib/apartments";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">Квартиры Ростова</Link>
          <nav className="nav">
            <Link href="/apartments">Квартиры</Link>
            <a href="#advantages">Преимущества</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <p className="muted">Посуточная аренда в Ростове-на-Дону</p>
            <h1>Найдите квартиру для комфортного проживания</h1>
            <p>
              Пять проверенных вариантов из твоего старого сайта уже перенесены
              в единую структуру. Следующий этап — подключение базы данных и
              реального бронирования.
            </p>

            <form className="search" action="/apartments">
              <input name="city" placeholder="Город" defaultValue="Ростов-на-Дону" />
              <input name="checkIn" type="date" aria-label="Дата заезда" />
              <input name="checkOut" type="date" aria-label="Дата выезда" />
              <input name="guests" type="number" min="1" placeholder="Гостей" />
              <button className="btn" type="submit">Найти</button>
            </form>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Популярные квартиры</h2>
                <p className="muted">Актуальные варианты из Version 1.0</p>
              </div>
              <Link href="/apartments">Смотреть все →</Link>
            </div>

            <div className="grid">
              {apartments.map((apartment) => (
                <Link href={`/apartments/${apartment.slug}`} className="card" key={apartment.id}>
                  <img className="card-image" src={apartment.image} alt={apartment.name} />
                  <div className="card-body">
                    <h3>{apartment.name}</h3>
                    <p>{apartment.address}</p>
                    <p>{apartment.guests} гостей · {apartment.beds}</p>
                    <p className="price">от {apartment.priceFrom.toLocaleString("ru-RU")} ₽ / сутки</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="advantages">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Что меняется в Version 1.0</h2>
                <p className="muted">От статических HTML-страниц к единому приложению.</p>
              </div>
            </div>
            <div className="grid">
              {[
                ["Единый каталог", "Все квартиры описываются данными, а не отдельными HTML-файлами."],
                ["Поиск", "Главная уже подготовлена под даты, город и количество гостей."],
                ["Бронирование", "Следующий слой — PostgreSQL, календарь доступности и статусы брони."]
              ].map(([title, text]) => (
                <div className="card" key={title}>
                  <div className="card-body">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contacts">
        <div className="container">
          © 2026 Квартиры Ростова · Version 1.0
        </div>
      </footer>
    </>
  );
}
