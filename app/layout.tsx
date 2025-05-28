import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New Iqra Techno (N.I.T) - CBSE Affiliated School",
  description:
    "Premier CBSE affiliated school providing quality education from Junior KG to 12th Standard with Islamic Studies. Nurturing students in both Deen and Duniya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
