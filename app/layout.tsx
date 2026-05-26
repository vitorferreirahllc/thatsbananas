import type { Metadata } from "next";
import { Poppins, Fredoka, Caveat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "That's Bananas — A Brazilian State of Mind | Ottawa",
  description:
    "Good vibes, great food, no passport required. A cozy Brazilian café in Ottawa to slow down, recharge and enjoy life. Feijoada, Pão de Queijo, Coxinha, Churrasco and more.",
  keywords: [
    "Brazilian café Ottawa",
    "That's Bananas",
    "Feijoada",
    "Pão de Queijo",
    "Coxinha",
    "Churrasco",
    "Brazilian food Ottawa",
  ],
  openGraph: {
    title: "That's Bananas — A Brazilian State of Mind",
    description:
      "Good vibes, great food, no passport required. A cozy Brazilian café in Ottawa.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${fredoka.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
