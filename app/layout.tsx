import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "SmartCampus",
  description: "Navigate your campus — quickly, safely, and smartly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
