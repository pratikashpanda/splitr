import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Splitr",
  description: "Smartest way to split bills with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
        <Header/>
        <main className="max-h-screen">{children}</main>
      </body>
    </html>
  );
}
