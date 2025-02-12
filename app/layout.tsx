'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/header"; 
import Footer from "./components/footer";
import "./globals.css";
import { usePathname } from 'next/navigation';
import anime  from "animejs";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body 
  style={{ 
    margin: 0, 
    padding: 0, 
    display: "flex", 
    flexDirection: "row", 
    minHeight: "100vh", 
    backgroundColor: "white" 
  }} 
  className="text-black">

        {/* Side Header */}
        <div 
          style={{ 
            width: "17rem", // Fixed width for the side bar
            flexShrink: 0, // Prevent shrinking of the side bar
            minHeight: "100vh", // Ensure the sidebar takes full height
          }} 
          className="grid mr-5"> 
          <Header />
        </div>

        {/* Main Content */}
        <main 
  style={{ 
    flex: 1, 
    overflowY: "auto", // Ensures the main content scrolls if it exceeds the viewport
    padding: "20px", // Optionally add padding to make content readable
  }}>
  {children} {/* Render the content of each page */}
</main>
      </body>
    </html>
  );
}
