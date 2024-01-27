import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HeyGen-Mohit",
  description: "Heygen AI homepage clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
