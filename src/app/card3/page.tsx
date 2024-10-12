import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
export default function Card1(){
  return(
      <div className="mt-20 ">
    <div className="w-11/12 h-auto mx-auto card-content  mt-40 flex ">
    <div className="w-2/3 h-auto flex flex-col gap-12 card1-sub ">

     <h1 className="font-bold font-serif text-4xl ">48 Amazing Avocado Recipes You Need to Try</h1>
    <img src="/images/avacado.jpg" alt="" />
    <p>This creamy, green fruit is good in more than guac! Follow our best avocado recipes for pasta, sandwiches, scrambled eggs and more.</p>
    <div className="bg-white w-full h-full flex flex-col gap-8">

    <div className="card-container justify-between w-full flex py-4 px-4">
      <div className="flex flex-col w-full justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">Avocado Crab Boats</h1><br />
      <p>These boats are wonderful with tortilla chips, beans or rice. You can also cover them, pack them on ice, and take them to a picnic or potluck. Straight from the oven or cold, they’re always delicious. —Frances Benthin, Scio, Oregon</p><br />
     <Link href={'https://www.tasteofhome.com/recipes/avocado-crab-boats/'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small" ><img src="/images/card3/img1.jpg" alt="" /></div>
</div>

<div className="card-container w-full flex justify-between py-4 px-4">
      <div className="flex w-full flex-col justify-evenly items-center gap-4">
      <h1 className="text-2xl font-serif  text-center">Chicken Skewers with Cool Avocado Sauce</h1>
      <p>I’m always looking for lighter recipes to take on tailgate outings—and this one works fabulously for grilling. Just whip up the marinade, add the chicken and take it along to the pregame festivities. —Veronica Callaghan, Glastonbury, Connecticut </p>
      <Link href={'https://www.tasteofhome.com/recipes/chicken-skewers-with-cool-avocado-sauce/'}><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card3/img2.jpg" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col  justify-evenly  items-center">
      <h1 className="text-2xl font-seriftext-center">Blackened Catfish with Mango Avocado Salsa</h1>
      <p>A delightful and tasty rub makes this quick recipe fantastic. While the fish is sitting to allow the flavors to blend, you can easily assemble the salsa. My family loves this! —Laura Fisher, Westfield, Massachusetts</p>
     <Link href={'https://www.tasteofhome.com/recipes/blackened-catfish-with-mango-avocado-salsa/'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card3/img3.jpg" alt="" /></div>
</div>
<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">Avocado Scrambled Eggs</h1>
      <p>avocado blend nicely in these special eggs. They’re easy and perfect for breakfast. But I’ll also whip them up after an evening meeting or football game—or any time friends drop by for coffee. —Sundra Hauck, Bogalusa, Louisiana. .</p>
     <Link href={'https://www.tasteofhome.com/recipes/avocado-scrambled-eggs/'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card3/img4.jpg" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col items-center gap-8">
      <h1 className="text-2xl font-serif text-center">Salad with Avocado</h1>
      <p>Our favorite salad with avocado features juicy tomatoes, toasted walnuts, red onions, creamy avocados and spring mix tossed with a zesty lime dressing. Made in only 25 minutes, it’s the perfect quick side dish or light lunch.</p>
    <Link href={'https://www.tasteofhome.com/recipes/my-favorite-avocado-salad/'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card3/img5.jpg" alt="" /></div>
</div>
<Link href={'https://www.tasteofhome.com/collection/recipes-to-make-with-avocado/'}>
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