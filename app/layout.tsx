'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/header"; 
import Footer from "./components/footer"
import "./globals.css";
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname(); // Correctly initialize usePathname here
  return (
    <html lang="en">
       <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body style={{display: "flex", flexDirection: "column", minHeight: "100vh", height: "100%", backgroundColor: "white"}} className={`text-black`}>
        {/* Include the Header and Footer here */}
        <div className="grid grid-cols-1 max-[600px]:mx-1 mx-5"> 
          <Header/>
        </div>
        <main style={{flex : 1}}>{children}</main> {/* Render the content of each page */}
        <div style={{display: "grid", gridTemplateRows: "1fr auto"}} className="mx-5 max-[600px]:mx-1">
        {/* {pathname !== "" && <Footer />}         */}
        </div>
      </body>
    </html>
  );
}