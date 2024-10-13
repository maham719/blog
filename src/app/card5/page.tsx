import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
export default function Card1(){
  return(
      <div className="mt-20 ">
    <div className="w-11/12 h-auto mx-auto card-content  mt-40 flex ">
    <div className="w-2/3 h-auto flex flex-col gap-12 card1-sub ">

     <h1 className="font-bold font-serif text-4xl ">10 Healthy Granola Recipes with Rolled Oats</h1>
    <img src="/images/card5/main.png" alt="" />
    <p>Homemade granola with rolled oats is the perfect healthy breakfast dish when you crave something sweet and crunchy. Each of these recipes is made with nutritious ingredients including old fashioned rolled oats, nuts, and seeds. Serve homemade granola with Greek yogurt bowls or your favorite milk for a balanced and filling breakfast meal! Plus, the recipe for honey-nut granola.</p>
    <div className="bg-white w-full h-full flex flex-col gap-8">

    <div className="card-container justify-between w-full flex py-4 px-4">
      <div className="flex flex-col w-full justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">Healthy Maple Pecan Granola with Rolled Oats</h1><br />
      <p>Maple pecan granola is a vegan granola recipe filled with big clusters of oats and pecans – yum! This healthy homemade granola is packed with nutritious ingredients including rolled oats, pecans,</p><br />
     <Link href={'https://www.daisybeet.com/healthy-maple-pecan-granola-with-rolled-oats/'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small" ><img src="/images/card5/img1.jpg" alt="" /></div>
</div>

<div className="card-container w-full flex justify-between py-4 px-4">
      <div className="flex w-full flex-col justify-evenly items-center gap-4">
      <h1 className="text-2xl font-serif  text-center">Homemade Coconut Cashew & Almond Granola</h1>
      <p>This healthy homemade granola is easy to make and packed full of healthy ingredients like cashew nuts, almonds, and old fashioned rolled oats. </p>
      <Link href={'https://www.daisybeet.com/coconut-almond-sunshine-granola-vegan-gluten-free/'}><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card5/img2.jpg" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col  justify-evenly  items-center">
      <h1 className="text-2xl font-seriftext-center">Homemade Cinnamon Crunch Granola</h1>
      <p>This healthy, homemade cinnamon granola is amazingly crunchy, and packed full of good-for-ingredients like old fashioned rolled oats, brown rice crisp cereal, cashew nuts, and more. </p>
     <Link href={'https://www.daisybeet.com/cinnamon-toast-crunch-granola-vegan-gluten-free/'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card5/img3.jpg" alt="" /></div>
</div>
<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">Dark Chocolate & Coconut Breakfast Granola</h1>
      <p>This Samoas-inspired granola recipe is packed with the flavors of your favorite Girl Scout cookie! It’s got coconut, chocolate, and caramel-ly dates.</p>
     <Link href={'https://www.daisybeet.com/samoas-granola-vegan-gluten-free/'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card5/img4.jpg" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col items-center gap-8">
      <h1 className="text-2xl font-serif text-center">Lemon Blueberry Granola</h1>
      <p>This healthy lemon blueberry granola is lightly sweetened with honey and has rolled oats, almonds, and dried blueberries.</p>
    <Link href={'https://www.daisybeet.com/lemon-blueberry-granola/'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card5/img5.jpg" alt="" /></div>
</div>
<Link href={'https://www.daisybeet.com/9-healthy-granola-recipes-with-rolled-oats/'}>
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