import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
export default function Card1(){
  return(
      <div className="mt-20 ">
    <div className="w-11/12 h-auto mx-auto card-content  mt-40 flex ">
    <div className="w-2/3 h-auto flex flex-col gap-12 card1-sub ">

     <h1 className="font-bold font-serif text-4xl ">25 Green Salads to Serve with Any Meal</h1>
    <img src="/images/card2/main.webp" alt="" />
    <p>Look no further for brunch inspiration. These incredible salad recipes—both sweet and savory—will become your new go-to weekend staples.</p>
    <div className="bg-white w-full h-full flex flex-col gap-8">

    <div className="card-container justify-between w-full flex py-4 px-4">
      <div className="flex flex-col w-full items-center">
      <h1 className="text-2xl font-serif text-center">Mixed Greens with Shallot-Dijon Dressing</h1><br />
      <p>Grace Parisi tosses two pounds of mixed greens with minced shallot, white wine vinegar, olive oil, and Dijon for an easy, 10-minute salad.</p><br />
     <Link href={'https://www.foodandwine.com/recipes/mixed-greens-with-shallot-dijon-dressing'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small" ><img src="/images/card2/img1.webp" alt="" /></div>
</div>

<div className="card-container w-full flex justify-between py-4 px-4">
      <div className="flex w-full flex-col items-center gap-4">
      <h1 className="text-2xl font-serif text-center">Charred Cabbage Salad with Pecan Dukkah and Chile-Lime Butter</h1>
      <p>Chef Nick Cobarruvias draws on his Mexican heritage, layering complex flavor combinations into dishes like this crisp-tender cabbage salad. He seasons the charred cabbage with chile-lime butter...... </p>
      <Link href={'https://www.foodandwine.com/recipes/charred-cabbage-salad'}><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card2/img2.webp" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col items-center">
      <h1 className="text-2xl font-serif text-center">Big Italian Salad</h1>
      <p>Part green salad, part antipasto salad, this recipe combines lettuce, celery, onion, peperoncini, olives, and cherry tomatoes — all tossed in a dressing made with olive oil, vinegar, and a little mayonnaise.</p>
     <Link href={'https://www.foodandwine.com/recipes/big-italian-salad'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card2/img3.webp" alt="" /></div>
</div>
<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col items-center">
      <h1 className="text-2xl font-serif text-center">Kale Salad with Cranberries, Almonds, and Goat Cheese</h1>
      <p>This cool-weather kale salad dresses up the hearty greens with toasted almonds, dried cranberries, goat cheese, and a citrus-Dijon vinaigrette. .</p>
     <Link href={'https://www.foodandwine.com/recipes/kale-salad-with-cranberries-almonds-and-goat-cheese'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card2/img4.webp" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col items-center gap-8">
      <h1 className="text-2xl font-serif text-center">Wedge Salad with Tahini Green Goddess Dressing</h1>
      <p>Justin Chapple adorns this incredibly crunchy and refreshing iceberg wedge salad with a bold and thick herb-forward green goddess made with mayo and sour cream.</p>
    <Link href={'https://www.foodandwine.com/wedge-salad-with-tahini-green-goddess-dressing-7564694'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card2/img5.webp" alt="" /></div>
</div>
<Link href={'https://www.foodandwine.com/salads/green-salads/green-salads'}>
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