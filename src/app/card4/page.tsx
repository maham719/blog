import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
export default function Card1(){
  return(
      <div className="mt-20 ">
    <div className="w-11/12 h-auto mx-auto card-content  mt-40 flex ">
    <div className="w-2/3 h-auto flex flex-col gap-12 card1-sub ">

     <h1 className="font-bold font-serif text-4xl ">19 Heart-Healthy Soups That You'll Want to Make Forever</h1>
    <img src="/images/soup.jpeg" alt="" />
    <p>You'll want to build tonight's dinner around these deliciously healthy soups—from brothy stews to rich chilis and creamy bowls, there's something for everyone. Each of these soups sticks to lower quantities of saturated fat and sodium, so you know every bite is flavorful and heart-healthy. Recipes like our Vegetable Weight-Loss Soup and Slow-Cooker Chicken & White Bean Stew are so tasty, you'll be making them on repeat at any time of year.</p>
    <div className="bg-white w-full h-full flex flex-col gap-8">

    <div className="card-container justify-between w-full  flex py-4 px-4">
      <div className="flex flex-col w-full justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">Slow-Cooker Chicken & White Bean Stew</h1>
      <p>This load-and-go slow-cooker chicken recipe is perfect for a busy weeknight dinner. Serve this Tuscan-inspired dish with crusty bread, a glass of Chianti and a salad.</p>
     <Link href={'https://www.eatingwell.com/recipe/269820/slow-cooker-chicken-white-bean-stew/'}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small" ><img src="/images/card4/img1.webp" alt="" /></div>
</div>

<div className="card-container w-full flex justify-between py-6 px-4">
      <div className="flex w-full flex-col items-center justify-evenly">
      <h1 className="text-2xl font-serif text-center">Vegetable Weight-Loss Soup</h1>
      <p>A big bowl of this veggie-packed minestrone will leave you satisfied for hours without consuming a lot of calories--plus it's an easy way to boost your vegetable servings for the day. Top with a dollop of pesto before devouring this delicious skinny vegetable soup. </p>
      <Link href={'https://www.eatingwell.com/recipe/261632/vegetable-weight-loss-soup/'}><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card4/img2.webp" alt="" /></div>
</div>

<div className="card-container justify-between flex  py-4 px-4">
      <div className="flex w-full flex-col  justify-evenly items-center">
      <h1 className="text-2xl font-serif text-center">Cream of Turkey & Wild Rice Soup</h1>
      <p>Got leftover cooked chicken or turkey? Cook up a pot of soup! This recipe is a healthier twist on a classic creamy turkey and wild rice soup that hails from Minnesota. Serve with a crisp romaine salad and whole-grain bread.</p>
     <Link href={'https://www.eatingwell.com/recipe/252422/cream-of-turkey-wild-rice-soup/'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card4/img3.webp" alt="" /></div>
</div>
<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col justify-evenly  items-center">
      <h1 className="text-2xl font-serif text-center">Four-Bean & Pumpkin Chili</h1>
      <p>This healthy vegetarian chili has a fragrant touch of cinnamon for added flavor. Let diners top it with whatever suits their taste.</p>
     <Link href={'https://www.eatingwell.com/recipe/256518/four-bean-pumpkin-chili/'}> <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card4/img4.webp" alt="" /></div>
</div>

<div className="card-container justify-between flex py-4 px-4">
      <div className="flex w-full flex-col justify-evenly items-center gap-8">
      <h1 className="text-2xl font-serif text-center">Grilled Tomato Gazpacho</h1>
      <p>Grill the vegetables for this refreshing soup earlier in the day or even the night before. We sometimes serve the gazpacho in clear Spanish wine tumblers to show off the rich color.</p>
    <Link href={''}>  <button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
      </div>
       <div className="w-2/4 img-small"><img src="/images/card4/img5.webp" alt="" /></div>
</div>
<Link href={'https://www.eatingwell.com/gallery/7922703/heart-healthy-soup-recipes-to-make-forever/'}>
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