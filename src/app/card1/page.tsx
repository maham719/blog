import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';

export default function Card1(){
    return(
        <div className="mt-20 ">
      <div className="w-11/12 h-auto mx-auto card-content  mt-40 flex ">
      <div className="w-2/3 h-auto flex flex-col gap-12 card1-sub ">

       <h1 className="font-bold font-serif text-4xl ">These 23 Pancake Recipes Take Breakfast to a Whole New Level</h1>
      <img src="/images/pancake.webp" alt="" />
      <p>Look no further for brunch inspiration. These incredible pancake recipes—both sweet and savory—will become your new go-to weekend staples.</p>
      <div className="bg-white w-full h-full flex flex-col gap-8">

      <div className="card-container justify-between w-full flex py-4 px-4">
        <div className="flex flex-col w-full items-center">
        <h1 className="text-2xl font-serif text-center">Perfectly-Plated Fluffy Pancakes Stack</h1>
        <p>Professional food stylist Callie Blount plates a perfectly golden fluffy stack of pancakes, topped with fresh fruit, granola and chocolate. She shares her perfect pancake recipe, and also reveals her trick for getting the best maple syrup drizzle for photos.</p>
        <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button>
        </div>
         <div className="w-2/4 img-small" ><img src="/images/pancake.webp" alt="" /></div>
</div>

<div className="card-container w-full flex justify-between py-4 px-4">
        <div className="flex w-full flex-col items-center gap-4">
        <h1 className="text-2xl font-serif text-center">Blueberry-Lemon Buttermilk Pancakes</h1>
        <p>These fluffy blueberry-lemon buttermilk pancakes are packed with fresh blueberries and light lemony flavor. </p>
        <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button>
        </div>
         <div className="w-2/4 img-small"><img src="/images/card1/blueberry.jpg" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
        <div className="flex w-full flex-col items-center">
        <h1 className="text-2xl font-serif text-center">Green Smoothie Pancakes</h1>
        <p>Start your family’s day with a little luck of the Irish. These naturally green pancakes deliver all the fun of a breakfast favorite, plus a dash of fruit-and-veggie nutrition.</p>
        <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button>
        </div>
         <div className="w-2/4 img-small"><img src="/images/card1/greensmoothy.webp" alt="" /></div>
</div>
<div className="card-container justify-between flex py-4 px-4">
        <div className="flex w-full flex-col items-center">
        <h1 className="text-2xl font-serif text-center">Best-Ever Classic Pancakes</h1>
        <p>Nothing beats a fluffy, golden stack of homemade pancakes piled high, drenched in a waterfall of maple syrup. This will be your go-to recipe for classic pancake batter.</p>
        <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button>
        </div>
         <div className="w-2/4 img-small"><img src="/images/card1/bestever.webp" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
        <div className="flex w-full flex-col items-center gap-8">
        <h1 className="text-2xl font-serif text-center">Gluten-Free Almond Butter Banana Pancakes</h1>
        <p>Upgrade your gluten-free pancake mix with almond butter and bananas.</p>
        <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button>
        </div>
         <div className="w-2/4 img-small"><img src="/images/card1/glutenfree.webp" alt="" /></div>
</div>

      </div>
      </div>
      
      <Sidebar/>
      </div>
      
      <Divider/>
      <Newsletter/>
      </div>
    )
}