
'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';import Newsletter from './Newsletter';

export default function Sidebar() {
    return (
        <div className=" sidebar w-2/6 h-full right-0 relative">
            <div className="flex flex-col items-center justify-evenly gap-7">
                <div className="banner">
                    <p className="font-serif text-md">ABOUT ME</p>
                    <div className="triangle"></div>
                </div>
                <img src="/images/about.jpeg" alt="" className="rounded-full w-56 h-56"/>
                <p className="w-60 text-center">
                    Food stylist & photographer. Loves nature and healthy food, and good coffee. Don't hesitate to come for a small "hello!"
                </p> 
                <div className="border-t-8 border-[#cb892dd3] bg-white flex flex-col items-center py-4 w-4/5 text-center shadow-md h-[340px]">
                    <Newsletter/>
                </div>

                {/* follow icon section  */}
                <div className="flex flex-col w-full justify-evenly items-center gap-16 mb-10 ">
                <div className="banner">
                    <p className="font-serif text-md">SUBSCRIBE & FOLLOW</p>
                    <div className="triangle"></div>
                </div>

                <div className="flex justify-evenly items-center gap-3 text-2xl">
                <FontAwesomeIcon icon={faXTwitter}  className="p-2  hover:cursor-pointer  hover:text-white hover:bg-black rounded-full shadow-md"/>
          <FontAwesomeIcon  className="bg-white rounded-full  p-2 text-blue-600 hover:cursor-pointer  hover:text-white hover:bg-blue-600 shadow-md"  icon={faFacebook} />
          <FontAwesomeIcon  className="bg-white rounded-full p-2 text-red-700 hover:cursor-pointer  hover:text-white hover:bg-red-700 shadow-md"  icon={faPinterest} />
          <FontAwesomeIcon  className="bg-white rounded-full p-2 text-purple-700 hover:cursor-pointer  hover:text-white hover:bg-purple-700 shadow-md"  icon={faInstagram} />
          <FontAwesomeIcon  className="bg-white rounded-full p-2  hover:text-white hover:cursor-pointer  hover:bg-black shadow-md"  icon={faTiktok} />
          </div>
                </div>   
            </div>

            <div className="flex flex-col items-center justify-evenly gap-6 w-full">
            <div className="banner">
                    <p className="font-serif text-md">POPULAR POSTS</p>
                    <div className="triangle"></div>
                </div>

               <div className=" flex flex-col items-center justify-center gap-4 w-full -mr-9 px-4 text-sm">
                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/sushiii.jpg" alt="" className=" rounded-full"/></div><div className="w-4/5"><p >A Comprehensive Guide to Sushi</p></div>
                </div>

                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/Muffins.jpg" alt="" className=" rounded-full"/></div><div className="w-4/5"><p >67 Muffin Recipes Youll Want to Make Again and Again</p></div>
                </div>

                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/croissant.jpeg" alt="" className=" rounded-full"/></div><div className="w-4/5"><p >21 Croissant Recipe Ideas for Breakfast, Lunch, and Diinner</p></div>
                </div>

                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/mocktailsmall.jpg" alt="" className=" rounded-full"/></div><div className="w-4/5"><p >How to Create Non-Alcoholic Versions of Popular Cocktails</p></div>
                </div>

                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/coffee.png" alt="" className=" rounded-full"/></div><div className="w-4/5"><p >"Mastering the Art of Coffee: Brewing Techniques and Flavorful Recipes"</p></div>
                </div>

                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/granola.jpg" alt="" className=" rounded-full"/></div><div className="w-4/5"><p >"Nutritious and Delicious Granola Recipes for a Healthy Breakfast"</p></div>
                </div>

                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/spaghettismall.jpg" alt="" className=" rounded-full "/></div><div className="w-4/5"><p >Delicious Pasta Recipes: From Classic to Creative Dishes"</p></div>
                </div>

                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/soup.jpeg" alt="" className=" rounded-full"/></div><div className="w-4/5"><p >"Wholesome and Hearty Soup Recipes for Every Appetite"</p></div>
                </div>

                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/salads.jpg" alt="" className=" rounded-full"/></div><div className="w-4/5"><p >"Fresh and Flavorful: Creative Leafy Salad Recipes to Enjoy"</p></div>
                </div>

                <div className="  flex  items-center justify-center gap-2 w-full">

                    <div className="w-1/5"><img src="images/eggs.webp" alt="" className=" rounded-full"/></div><div className="w-4/5"><p >"Mastering the Art of Poached Eggs: Tips and Recipes "</p></div>
                </div>
                
            </div>

            
            </div>

        </div>
    );
}
