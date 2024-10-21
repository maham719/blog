'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
  faTiktok,

} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger-menu') as HTMLElement | null;
        const menu = document.querySelector('#menu') as HTMLElement | null;
      const  items=document.querySelector('ul') as HTMLElement | null;
        const toggleMenu = () => {
            setMenuOpen((prevState) => !prevState);
        };

        if (hamburger) {
            hamburger.addEventListener('click', toggleMenu);
          
        }

        // Cleanup event listener when the component unmounts
        return () => {
            if (hamburger) {
                hamburger.removeEventListener('click', toggleMenu);
            }
        };
    }, []);

    useEffect(() => {
        const menu = document.querySelector('#menu') as HTMLElement | null;
        if (menu) {
            if (menuOpen) {
                menu.classList.add('menu'); // Ensure this class displays the menu
            } else {
                menu.classList.remove('menu');
            }
        }
    }, [menuOpen]); // Run this effect when menuOpen changes

    return (
        <div className="header w-full h-20 fixed top-0 z-50 mb-4">
            <div className="flex header-sub items-center justify-between md:px-10">
                <div className="flex items-center gap-2 md:gap-4 title">
                    <img src="/images/LOGO.png" alt="Food52 Logo" className="w-20 md:w-28" />
                    <div>
                        <h1 className="font-extrabold text-xl md:text-3xl">Food52</h1>
                        <p className="text-xs md:text-sm font-extralight">Recipes and food stories around the world</p>
                    </div>
                </div>
                <ul className="flex text-md md:flex-row items-center gap-4 md:gap-8 " id="menu">
                    <Link href="/"><li className="texts cursor-pointer">HOME</li></Link>
                    <Link href="/about"><li className="texts cursor-pointer">ABOUT US</li></Link>
                    <Link href="/register"><li className="texts cursor-pointer">REGISTER</li></Link>
                    <div className="icons flex items-center gap-3 md:gap-6 text-base md:text-lg "> 
                    <FontAwesomeIcon icon={faXTwitter} className="texts cursor-pointer" />
                    <FontAwesomeIcon icon={faFacebook} className="texts cursor-pointer" />
                    <FontAwesomeIcon icon={faPinterest} className="texts cursor-pointer" />
                    <FontAwesomeIcon icon={faInstagram} className="texts cursor-pointer" />
                    <FontAwesomeIcon icon={faTiktok} className="texts cursor-pointer" />
                </div>
                </ul>
            </div>
            <FontAwesomeIcon icon={faBars} className="texts cursor-pointer hamburger-menu" />
        </div>
    );
}
