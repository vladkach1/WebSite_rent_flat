import Link from "next/link";
import { apartments } from "../lib/apartments";

export default function ApartmentsPage() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">Квартиры Ростова</Link>
          <nav className="nav">
            <Link href="/apartments">Квартиры</Link>
            <Link href="/">Главная</Link>
          </nav>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="muted">Ростов-на-Дону</p>
              <h2>Все квартиры</h2>
            </div>
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
      </main>
    </>
  );
}
