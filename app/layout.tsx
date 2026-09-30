import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Квартиры Ростова — посуточная аренда",
  description: "Современный сервис посуточной аренды квартир в Ростове-на-Дону."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
