import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    // parent container
    <div className="md:w-full sm:px-10 md:px-0 sm:w-full">
      {/* footer container main */}
      <div className="bg-[#262416] w-full flex flex-col md:flex-row  justify-center flex-shrink-0 items-center pt-8">
        
       

        {/* footer's second section */}
        <div className="flex flex-col md:flex-row items-center justify-center  w-full md:w-2/3 gap-8 ">
          {/* Contact Section */}
         

          {/* Follow Us Section */}
          <div className="flex flex-col items-center w-full md:w-full gap-8">
          <div className=" flex  justify-center items-center"> 
          <h1 className="font-extrabold text-xl text-[#FFC101]">Food52</h1>
          <img src="images/LogoDark.png" alt="Logo" className="w-20" />
          
          </div>
          <hr className="w-full border-[#110f0a]"/>
            <div className="text-2xl text-white flex gap-3">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="texts cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="texts cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faPinterest}
                className="texts cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="texts cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faTiktok}
                className="texts cursor-pointer"
              />
            </div>
            <ul className="flex flex-col md:flex-row text-white font-bold gap-4 pb-8">
              <Link href={'/'}>
                <li className="texts">HOME</li>
              </Link>
              <Link href={'/about'}>
                <li className="texts">ABOUT US</li>
              </Link>
              <Link href={'/register'}>
                <li className="texts">REGISTER</li>
              </Link>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Copyright Section */}
     
          <div className="bg-[#110f0a] flex  justify-center items-center"> 
          <h1 className=" text-xs text-white">By Syeda Maham Amjad</h1>
          
          
          </div>
      
    </div>
  );
}
