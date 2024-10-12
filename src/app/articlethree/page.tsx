import Link from 'next/link';
import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';

export default function Articlethree(){
    return (
     
         <div className="mt-20 ">
      <div className="w-11/12 h-auto mx-auto  content mt-40 flex ">
        <div className="w-2/3 h-auto flex flex-col gap-12  article-content">
        <h1  className="font-bold font-serif text-4xl">21 Croissant Recipe Ideas for Breakfast, Lunch, and Dinner</h1>
        <img src="/images/croissant1.webp" alt="" />
        <p>
        Croissants are a French pastry known for their buttery flavor and flaky texture. Delicious in so many ways, fill them with refreshing preserves for a sweet breakfast or use them in lieu of sandwich bread for a packed lunch. Whether you’re baking from scratch, using a refrigerated crescent roll dough, or picking your croissants up from the bakery, here are 21 croissant recipe ideas to amplify that flaky goodness.     </p>
        <h1  className="font-bold font-serif text-4xl">Croissant breakfast recipe ideas</h1>
        
        <h2 className="font-bold font-serif text-2xl underline hover:text-green-600"> Easy cinnamon rolls</h2>
        <p>Whipping up a batch of cinnamon rolls just got easier with this recipe that uses crescent roll dough as the base. They take just minutes from start to finish and are a great recipe for kids. </p>
        
      <Link href="https://centslessdeals.com/cinnamon-apple-crescent-rolls/" >  <h2 className="font-bold font-serif text-2xl underline hover:text-green-600"> Cinnamon apple croissants</h2>
      </Link>
        <p>Fill refrigerated crescent roll dough with a spoonful of apples cooked in butter, sugar, and spices. Roll up, bake, and top with drizzled cream cheese frosting and powdered sugar. </p>

       <Link href={'https://midwestniceblog.com/croissant-french-toast-bake/'}> <h2 className="font-bold font-serif text-2xl underline hover:text-green-600">  Croissant French toast bake</h2></Link>
        <p>Tear up refrigerated croissant dough and use it as the base for a delicious French toast bake made with eggs, butter, and cream. </p>

        <h1  className="font-bold font-serif text-4xl">Croissant sandwich recipe ideas</h1>
   <p>Often overlooked as a sandwich option, croissants work just as well as sliced bread, if not better. Try one of these recipes or use them for inspiration for your next meal or your child’s lunchbox. </p>

   <Link href={'https://life-in-the-lofthouse.com/chicken-salad-croissants/'}><h2 className="font-bold font-serif text-2xl underline hover:text-green-600">Chicken salad sandwiches</h2></Link>

   <img src="/images/croissant2.webp" alt="" />
   <p>Serve your favorite chicken salad recipe on large, bakery-fresh butter croissants.</p>

   <Link href={'https://www.jugglingactmama.com/buffalo-chicken-crescent-ring/'}><h2 className="font-bold font-serif text-2xl underline hover:text-green-600"> Buffalo chicken crescent ring</h2></Link>
  <p>Mix deli chicken with celery, onion, and buffalo sauce. Place mixture in a ring of crescent rolls, roll up and bake for a low-to-no-hassle dinner. </p>
  <Link href={'https://www.instacart.com/company/ideas/croissant-recipe-ideas/'}> <h1  className="font-bold font-serif text-2xl hover:text-[#F64900]">Read Full Article On Site</h1></Link>
        </div>
        <Sidebar/>
        </div>
        <Divider/>
        <Newsletter/>
        </div>  
    )
}