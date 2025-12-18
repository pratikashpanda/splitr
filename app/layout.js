import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Splitr",
  description: "Smartest way to split bills with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ConvexClientProvider>
          <Header />
          <main className="max-h-screen">{children}</main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
