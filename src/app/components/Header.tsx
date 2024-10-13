'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    useEffect(() => {
        const nav = document.querySelector('.header');

        const handleScroll = () => {
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
        <div className="header w-full h-20 fixed top-0 left-0 z-50 mb-4">
            <div className="flex  header-sub items-center justify-between px-4 md:px-10">
                <div className="flex items-center gap-2 md:gap-4">
                    <img src="/images/LOGO.png" alt="" className="w-20 md:w-28" />
                    <div>
                        <h1 className="font-extrabold text-xl md:text-3xl">Food52</h1>
                        <p className="text-xs md:text-sm font-extralight">Recipes and food stories around the world</p>
                    </div>
                </div>
                <ul className="flex text-md  items-center gap-4 md:gap-8">
                    <Link href="/"><li className="texts cursor-pointer">HOME</li></Link>
                    <Link href="/about"><li className="texts cursor-pointer">ABOUT US</li></Link>
                    <Link href="/register"><li className="texts cursor-pointer">REGISTER</li></Link>
                </ul>
                <div className="icons flex items-center gap-3 md:gap-6 text-base md:text-lg"> 
                    <FontAwesomeIcon icon={faXTwitter} className="texts cursor-pointer"/>
                    <FontAwesomeIcon icon={faFacebook} className="texts cursor-pointer"/>
                    <FontAwesomeIcon icon={faPinterest} className="texts cursor-pointer"/>
                    <FontAwesomeIcon icon={faInstagram} className="texts cursor-pointer"/>
                    <FontAwesomeIcon icon={faTiktok} className="texts cursor-pointer"/>
                </div>
            </div>
        </div>
    );
} 
