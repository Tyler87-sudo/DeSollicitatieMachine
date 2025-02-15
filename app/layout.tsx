'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/header"; 
import Footer from "./components/footer"
import "./globals.css";
import { usePathname } from 'next/navigation';
import anime  from "animejs";
import { useEffect } from "react";



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname(); // Correctly initialize usePathname here
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  return (
    <html className="min-h-screen" lang="en">
       <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body style={{backgroundColor: "white", minHeight: "100vh" }} className={"min-h-screen w-full h-full text-black flex flex-row overflow-hidden"}>
        {/* Include the Header and Footer here */}
        <div className="pr-5"> 
          <Header/>
        </div>
        <main className="flex-grow" style={{}}>{children}</main> {/* Render the content of each page */}
      </body>
    </html>
  );
}