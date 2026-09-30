import Link from "next/link";
import { notFound } from "next/navigation";
import { apartments } from "../../lib/apartments";

export function generateStaticParams() {
  return apartments.map((apartment) => ({ slug: apartment.slug }));
}

export default async function ApartmentPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const apartment = apartments.find((item) => item.slug === slug);

  if (!apartment) notFound();

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">Квартиры Ростова</Link>
          <nav className="nav">
            <Link href="/apartments">Все квартиры</Link>
            <Link href="/">Главная</Link>
          </nav>
        </div>
      </header>

      <main className="detail">
        <div className="container">
          <p><Link href="/apartments">← Все квартиры</Link></p>
          <div className="detail-grid">
            <article className="detail-main">
              <img src={apartment.image} alt={apartment.name} />
              <div className="detail-content">
                <p className="muted">Ростов-на-Дону</p>
                <h1>{apartment.name}</h1>
                <p>{apartment.description}</p>
                <p>{apartment.address}</p>
                <p>{apartment.guests} гостей · {apartment.beds}</p>
              </div>
            </article>

            <aside className="booking-box">
              <p className="muted">Стоимость</p>
              <h2>от {apartment.priceFrom.toLocaleString("ru-RU")} ₽</h2>
              <p className="muted">за сутки, итоговая цена зависит от дат и количества гостей.</p>
              <button className="btn" type="button">Забронировать</button>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
