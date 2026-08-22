import "./globals.css";
import Navigation from "../components/Navigation";

export const metadata = {
  title: "Sean Rad P. Alberto | Portfolio",
  description: "Portfolio of Sean Rad P. Alberto, a Computer Science student.",
};

export const viewport = {
  themeColor: "#1a1a1a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navigation />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
