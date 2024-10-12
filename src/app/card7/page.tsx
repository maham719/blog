import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
export default function Card1(){
  return(
      <div className="mt-20 ">
    <div className="w-11/12 h-auto mx-auto card-content  mt-40 flex ">
    <div className="w-2/3 h-auto flex flex-col gap-12 card1-sub ">

     <h1 className="font-bold font-serif text-4xl ">Delicious Pasta Recipes: From Classic to Creative Dishes</h1>
    <img src="/images/spaghetti.webp" alt="" />
    <p>Explore the world of pasta with these delicious recipes that range from classic favorites to creative new dishes. Whether you crave a comforting bowl of spaghetti or want to experiment with bold flavors and ingredients, these pasta recipes offer something for everyone. Perfect for any occasion, these dishes will elevate your pasta game and satisfy your cravings.</p>
    <div className="bg-white w-full h-full flex flex-col gap-8">
    <h1 className="font-bold font-serif text-4xl ">10 Classic Pasta Recipes</h1>
    <p className="text-xl">From cacio e pepe to puttanesca, here are recipes for ten Italian pasta classics. 
    </p>
    <div className="card-container justify-between w-full  flex py-4 px-4">
      <div className="flex flex-col w-full justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">Pasta alla Norma</h1>
      <p>Legend says that this iconic Sicilian dish was created in the 1800s after opening night of Bellini's opera Norma. Pasta topped with eggplant, tomato sauce and ricotta salata makes for a hearty vegetarian meal that can be whipped together in under an hour.
      </p>
     <Link href={'https://www.lacucinaitaliana.com/recipe/pasta/pasta-alla-norma'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small" ><img src="/images/card7/img1.jpg" alt="" /></div>
</div>

<div className="card-container w-full flex justify-between py-6 px-4">
      <div className="flex w-full flex-col items-center justify-evenly">
      <h1 className="text-2xl font-serif text-center">Trofie Pasta With Ligurian Pesto</h1>
      <p>Flour, water, salt and little gestures handed down from generation to generation. A mortar, some garlic, oil, basil, parmesan cheese, pecorino cheese, pine nuts… and we’re off to Liguria and a magnificent plate of trofie pasta with simple pesto.
      </p>
      <Link href={'https://www.lacucinaitaliana.com/recipe/pasta/trofie-pasta-ligurian-pesto'}><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card7/img2.jpg" alt="" /></div>
</div>

<div className="card-container justify-between flex  py-4 px-4">
      <div className="flex w-full flex-col  justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">Classic Carbonara</h1>
      <p>Find out how to make our recipe for the best spaghetti carbonara: a tasty dish that everyone likes and perfect if you want to make a simple but delicious dish.</p>
     <Link href={'https://www.lacucinaitaliana.com/recipe/pasta/classic-carbonara'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card7/img3.jpg" alt="" /></div>
</div>
<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col justify-evenly  items-center">
      <h1 className="text-2xl font-serif text-center">Pasta alla Gricia</h1>
      <p>Pecorino Romano, guanciale and pepper is all you need for one of the most traditional and beloved Roman pasta recipes: Pasta alla Gricia.
      </p>
     <Link href={'https://www.lacucinaitaliana.com/recipe/pasta/pasta-alla-gricia'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card7/img4.jpg" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col justify-evenly items-center gap-8">
      <h1 className="text-2xl font-serif text-center">Linguine alla Puttanesca</h1>
      <p>A Neapolitan classic, it's rumored that the name puttanesca comes from the brothels in the Spanish Quarters (lady of the night is puttana in Italian). Linguine with tomatoes, anchovies, and chili pepper give a kick to this dish with a scandalous name.
      </p>
    <Link href={''}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card7/img5.jpg" alt="" /></div>
</div>
<Link href={'https://www.lacucinaitaliana.com/recipe/pasta/linguine-alla-puttanesca'}>
<h1  className="font-bold font-serif text-2xl hover:text-[#F64900]">Read Full Article On Site</h1></Link>
 <Link href={"</Link>"}>
<h1 className="font-bold font-serif text-4xl hover:underline hover:text-[#F64900] ">31 Creative Pasta Dinner Ideas to Change Up Your Weeknight Routine</h1></Link>
    </div>
    </div>
    
    <Sidebar/>
    </div>
    
    <Divider/>
    <Newsletter/>
    </div>
  )
}