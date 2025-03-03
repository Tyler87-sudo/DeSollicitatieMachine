'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { useState } from 'react';


export default function Header() {

  const pathname = usePathname(); 

  const navLinks = [
    { href: '/', label: 'Zie-Fantasie' },
    { href: '/tippendoos', label: 'Tippendoos' },
    { href: '/hinkelpad', label: 'Hinkelpad' },
    { href: '/charts', label: 'De Beste Tips'}
  ];

  const activeLinkStyle = {
    color: 'black',
    fontWeight: '600',
  };

  const linkStyle = {
    transition: "1s ease",
    color: 'black',
    fontWeight: "500", 
    textDecoration: 'none',
  };

  return (

<div style={{ width: "135px", minHeight: "100vh", height: "auto", backgroundColor: "#EE4426", borderBottomRightRadius: "16px", borderTopRightRadius: "16px"}} className='glass'>
<ul className="px-1">
        {navLinks.map(({ href, label }) => (
  <li key={href} className="p-2"style={{ fontSize: "18px" }}> 
    <Link
  href={href}
  className={`transition-all duration-500 ease-linear animate-in fade-in zoom-in
    ${pathname === href ? "text-white" : "text-black hover:text-white"}`}
>
  {label}
</Link>
  </li>
))}
        
        </ul>
      </div>

  )
}