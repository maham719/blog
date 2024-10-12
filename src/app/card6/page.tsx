import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
export default function Card1(){
  return(
      <div className="mt-20 ">
    <div className="w-11/12 h-auto mx-auto card-content  mt-40 flex ">
    <div className="w-2/3 h-auto flex flex-col gap-12 card1-sub ">

     <h1 className="font-bold font-serif text-4xl ">Mastering the Art of Brewing the Perfect Cup of Coffee</h1>
    <img src="/images/coffee.png" alt="" />
    <p>Coffee, with its rich aroma and invigorating taste, has become an integral part of many people’s daily routines. Whether you enjoy it in the morning to kick-start your day or savor it during a cozy afternoon break, making a delicious cup of coffee is an art that can be perfected with a few essential techniques and considerations. I will guide you through the steps to make the best coffee, ensuring an exceptional experience with every sip.</p>

    <h1 className="font-bold font-serif text-2xl ">1. Start with Quality Beans</h1>
    <p>The foundation of a great cup of coffee lies in using high-quality beans. Seek out freshly roasted beans from reputable sources. Look for roast dates to ensure freshness. Choose beans that align with your taste preferences, whether it's a light, medium, or dark roast. Experiment with single-origin beans or blends to discover your preferred flavors.</p>
    <Link href={'https://benable.com/enigmaconcierge/healthy-coffee-recommendations'}>
    <p className="underline text-xl">Here’s a list of best low acid coffee recommendations</p></Link>
    <Link href={'https://medium.com/@Mugarcoffee/mastering-the-art-of-brewing-the-perfect-cup-of-coffee-c1c0b16e3426'}>
<h1  className="font-bold font-serif text-xl hover:text-[#F64900]">Read Full Article On Site</h1></Link>
    <div className="bg-white w-full h-full flex flex-col gap-8">
    <h1 className="font-bold font-serif text-4xl ">33 Best Coffee Recipes To Get You Excited For The Day</h1>
    <div className="card-container justify-between w-full flex py-4 px-4">
      <div className="flex flex-col w-full justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">Ca Phe Muoi</h1><br />
      <p>Discover the unique flavors of Ca Phe Muoi, a delightful Vietnamese salted coffee. This rich and creamy treat combines robust coffee with a touch of salt for an unexpected twist. Perfect for those looking to elevate their coffee experience, this recipe will awaken your taste buds and invigorate your mornings.</p><br />
     <Link href={'https://www.daisybeet.com/healthy-maple-pecan-granola-with-rolled-oats/'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small" ><img src="/images/card6/img1.jpg" alt="" /></div>
</div>

<div className="card-container w-full flex justify-between py-4 px-4">
      <div className="flex w-full flex-col justify-evenly items-center gap-4">
      <h1 className="text-2xl font-serif  text-center">The Cracked Coffee Latte</h1>
      <p>Indulge in the creamy goodness of our Cracked Coffee Latte. This delightful blend of rich espresso, steamed milk, and a hint of sweetness is perfect for any coffee lover. Elevate your coffee break with this irresistible treat that’s sure to warm your heart and energize your day! </p>
      <Link href={'https://www.daisybeet.com/coconut-almond-sunshine-granola-vegan-gluten-free/'}><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card6/img2.jpg" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col  justify-evenly  items-center">
      <h1 className="text-2xl font-seriftext-center"> Matcha Tonic</h1>
      <p>Revitalize your day with this refreshing Matcha Tonic. Perfectly balanced with zesty lemon and a touch of sweetness, it’s the ultimate pick-me-up for any occasion. Discover how to blend the goodness of matcha with sparkling water for a delicious and energizing beverage. Cheers to wellness!</p>
     <Link href={'https://www.daisybeet.com/cinnamon-toast-crunch-granola-vegan-gluten-free/'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card6/img3.jpg" alt="" /></div>
</div>
<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">The Cracked Matcha Latte</h1>
      <p>Unlock the vibrant flavors of our Cracked Matcha Latte. This delightful blend of rich matcha and creamy milk offers a refreshing twist on a classic favorite. Perfect for a cozy morning or an afternoon pick-me-up, it’s both delicious and packed with wellness benefits. Sip, savor, and enjoy!</p>
     <Link href={'https://www.daisybeet.com/samoas-granola-vegan-gluten-free/'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card6/img4.jpg" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col justify-evenly items-center gap-8">
      <h1 className="text-2xl font-serif text-center">Cafecito de Olla</h1>
      <p>Share via
Pin
Café de olla is a staple of a traditional Mexican breakfast. Have a little sip of Mexico every morning while leaving your home smelling amazing!</p>
    <Link href={'https://www.daisybeet.com/lemon-blueberry-granola/'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card6/img5.jpg" alt="" /></div>
</div>
<Link href={'https://tasty.co/article/michelleno/coffee-drinks-recipes'}>
<h1  className="font-bold font-serif text-2xl hover:text-[#F64900]">Read Full Article On Site</h1></Link>
    </div>
    </div>
    
    <Sidebar/>
    </div>
    
    <Divider/>
    <Newsletter/>
    </div>
  )
}