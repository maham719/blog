'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.header');
      if (window.scrollY > 0) {
        nav?.classList.add('navbar');
      } else {
        nav?.classList.remove('navbar');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header w-full h-20 fixed top-0 z-50 mb-4 py-3">
      <div className="flex header-sub items-center justify-between md:px-10">
        <div className="flex items-center gap-2 md:gap-4 title">
          <Image src="/images/LOGO.png" alt="Food52 Logo" width={80} height={80} />
          <div>
            <h1 className="font-extrabold text-xl md:text-3xl">Food52</h1>
            <p className="text-xs md:text-sm font-extralight">
              Recipes and food stories around the world
            </p>
          </div>
        </div>
        <ul
          className={`flex text-md md:flex-row items-center gap-4 md:gap-8 ${
            menuOpen ? 'menu' : ''
          }`}
          id="menu"
        >
          <Link href="/">
            <li className="texts cursor-pointer">HOME</li>
          </Link>
          <Link href="/about">
            <li className="texts cursor-pointer">ABOUT US</li>
          </Link>
          <Link href="/register">
            <li className="texts cursor-pointer">REGISTER</li>
          </Link>
          <div className="icons flex items-center gap-3 md:gap-6 text-base md:text-lg">
            <FontAwesomeIcon icon={faXTwitter} className="texts cursor-pointer" />
            <FontAwesomeIcon icon={faFacebook} className="texts cursor-pointer" />
            <FontAwesomeIcon icon={faPinterest} className="texts cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="texts cursor-pointer" />
            <FontAwesomeIcon icon={faTiktok} className="texts cursor-pointer" />
          </div>
        </ul>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="texts cursor-pointer hamburger-menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      />
    </div>
  );
}
