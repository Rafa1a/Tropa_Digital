import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto-variable",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"], 
});


export const metadata: Metadata = {
  title: "Desafio Next.js",
  keywords: ["Next.js", "React", "Tailwind CSS"],
  description: "Feito por Rafael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
