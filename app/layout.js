import "./globals.css";
import Navigation from "../components/Navigation";

export const metadata = {
  title: "Sean Rad P. Alberto | Portfolio",
  description: "Portfolio of Sean Rad P. Alberto, a Computer Science student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
