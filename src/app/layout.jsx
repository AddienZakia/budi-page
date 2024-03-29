import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import "aos/dist/aos.css";

export const metadata = {
  title: "Phlv Design",
  description: "Phlv Design Portofolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
