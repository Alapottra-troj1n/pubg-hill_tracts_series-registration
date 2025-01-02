import type { Metadata } from "next";
import { Lato, Teko } from "next/font/google";
import "./globals.css";
import 'react-calendar/dist/Calendar.css';
import { Toaster } from "react-hot-toast";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: [ '100', '300', '400', '700', '900' ],
})


export const metadata: Metadata = {
  title: " Hill Tracts Battlegrounds Series",
  description: "Unite. Compete. Conquer.",
  icons: '/favicon.png'
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${teko.variable} ${lato.variable}  antialiased font-lato`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
