import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WireframeMesh from "./components/WireframeMesh";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hanshills & Co. - Where Capital Meets Strategy",
  description: "A new-age Asset Management Firm specializing in Private Equity, Venture Capital, and Advisory services. Building enduring value across every stage.",
  keywords: "asset management, private equity, venture capital, advisory, investment, strategy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased transition-all duration-500 ease-in-out`}
      >
        {/* Global Wireframe Mesh Background */}
        <WireframeMesh />
        {children}
      </body>
    </html>
  );
}
