'use client'; // Ensure the component is rendered on the client side

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get the current pathname
import { useState } from 'react';


export default function Header() {

  const pathname = usePathname(); // Get the current pathname

  // Define the navigation links
  const navLinks = [
    { href: '/', label: 'Zie-Fantasie' },
    { href: '/tippendoos', label: 'Tippendoos' },
    { href: '/hinkelpad', label: 'Hinkelpad' },
    { href: '/charts', label: 'De Beste Tips'}
  ];

  // Inline styles for active link
  const activeLinkStyle = {
    color: 'black', // Active link color
    fontWeight: '600',
  };

  // Default link style
  const linkStyle = {
    color: 'black', // Default link color
    fontWeight: "500", 
    textDecoration: 'none',
  };

  return (

<div style={{ width: "100%", minHeight: "100vh", height: "auto", backgroundColor: "#EE4426", borderBottomRightRadius: "16px", borderTopRightRadius: "16px"}} className='glass'>
<ul className="menu menu-vertical px-1">
        {navLinks.map(({ href, label }) => (
  <li key={href} style={{ fontSize: "18px" }}> {/* ✅ Key directly on <li> */}
    <Link href={href} style={pathname === href ? activeLinkStyle : linkStyle}>
      {label}
    </Link>
  </li>
))}
        
        </ul>
      </div>

  )
}