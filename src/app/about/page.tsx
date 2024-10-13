import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';

export default function About(){
    return(
        <div className="mt-20 about-main " >
           
        <div  className="w-4/5 mx-auto h-auto flex justify-evenly items-center about p-16 ">
       <div className="flex flex-col items-center justify-between gap-12 aabout ">  <h1 className="text-5xl text-center font-serif text-[#F64900] font-bold">ABOUT US</h1>
        <img src="/images/aboutus.png" alt="" className=" w-full h-56"/></div>
        <p className="w-3/5 about-para">Hello, food lovers! I’m Syeda Maham Amjad, a passionate food blogger, recipe developer, and food photographer. My journey with food started as a simple love for cooking, and over time, it has transformed into a deep passion for exploring global cuisines, experimenting with flavors, and sharing my culinary experiences with the world.

I believe that food is more than just sustenance; it’s a way of connecting with people, cultures, and memories. Whether it’s the comfort of a homemade meal or the excitement of trying street food in a new city, each bite tells a story, and I’m here to share those stories with you. From baking the perfect loaf of bread to discovering hidden gems in the food world, I’m constantly on a quest to uncover delicious experiences.

On this blog, you’ll find a mix of my favorite recipes—both sweet and savory—alongside food photography tips and stories from my culinary adventures. My aim is to inspire you to get creative in your kitchen, try new ingredients, and most importantly, enjoy the art of cooking. So grab your apron, and let’s make something delicious together! 🍽✨






</p>
        </div>
        <Divider/>
        <Newsletter/>
        </div>
    )
}