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
    transition: "0.5s ease",
    color: 'black', // Active link color
    fontWeight: '800',
  };

  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen); // Toggle between true (open) and false (closed)
    console.log(isOpen);
    console.log("Test function")
  };


  // Default link style
  const linkStyle = {
    transition: "0.5s ease",
    color: 'black', // Default link color
    fontWeight: "500", 
    textDecoration: 'none',
  };

  return (
    <div
      style={{
        zIndex: "1",
        backgroundColor: '#FFF5B4',
        fontFamily: 'Montserrat',
        fontWeight: '500',
        borderBottomRightRadius: '20px',
        borderTopRightRadius: '20px',
      }}
      className="grid grid-rows-3 glass navbar bg-base-100"
    >
      {/* Mobile version */}
      <div style={{display: "absolute"}} className="justify-self-start justify-items-center self-start navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul onClick={toggleDropdown} style={{transition: "0.5s ease", backgroundColor: "lightyellow", border: "1px solid black"}}
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={pathname === href ? activeLinkStyle : linkStyle}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">De Sollicitatie Machine</a>
      </div>

      {/* Desktop version */}
      <div className="grid place-self-center">
        <ul className="menu menu-vertical px-1">
          {navLinks.map(({ href, label }) => (
            <div>
                <li className='' style={{fontSize: "18px"}} key={href}>
              <Link
                href={href}
                style={pathname === href ? activeLinkStyle : linkStyle}
              >
                {label}
              </Link>
            </li>
            </div>
            
          ))}
        
        </ul>
      </div>

      {/* navbar copyright text */}
      <div className="self-end place-self-center">
        <div className="dropdown dropdown-end navbar-end">
            <p>Test</p>
          {/* <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-80 rounded-full">
              <img src="/me.bmp" alt="Photo of me" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}