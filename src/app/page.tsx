import Divider from './components/Divider';
import Newsletter from './components/Newsletter';
import Sidebar from './components/Sidebar';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="mt-24 main-container">
      <div className="img-container  tracking-widest ">
        <div
          id="img1"
          className=" effect text-2xl text-center flex items-center  justify-center flex-col  "
        >
         
          
            <h3 className="tag">STREET</h3>
        
          <Link href={'/articleone'}><h1 className=" font-serif"> A Comprehensive Guide to Sushi</h1></Link>
        </div>
        <div className="group">
          <div
            id="img2"
            className="effect  image text-2xl h-auto text-center flex items-center  justify-center flex-col pt-16"
          >
           
              <h3 className="tag">SPOTLIGHT</h3>
            
            <Link href={'/articletwo'}><h1 className=" font-serif">
             67 Muffin Recipes Youll Want to Make Again and Again
            </h1></Link>
          </div>
          <div className="flex w-full h-full">
            <div id="img3" className="effect  image text-center flex items-center  justify-center flex-col pt-16 hover:text-lg">
            
            
            <h3 className="tag">SPOTLIGHT</h3>
          
          <Link href={'/articlethree'}><h1 className=" font-serif">
           
          21 Croissant Recipe Ideas for Breakfast, Lunch, and Dinner
          </h1></Link>
            </div>
            <div id="img4" className="effect  image text-center flex items-center  justify-center flex-col text-sm pt-16 hover:text-lg ">
            
            
            <h3 className="tag">POPULAR</h3>
          
        <Link href={'/articlefour'}>  <h1 className=" font-serif ">
           
          How to Create Non-Alcoholic Versions of Popular Cocktails
          </h1></Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" small-imgs w-full h-56 bg-gray-300 object-contain flex items-center justify-center gap-6 px-8">
        <div className="flex flex-col items-center gap-4"><img src="/images/desserts.jpg" alt="" />
        <p>DESSERTS</p>
        </div>
        <div className=" flex flex-col items-center gap-4"><img src="/images/cuisines.jpg" alt="" /><p>CUISINE</p></div>
        <div className="flex flex-col items-center gap-4"><img src="/images/apetizers.jpeg" alt="" /><p>APPETIZERS</p></div>
        <div className="flex flex-col items-center gap-4"><img src="/images/beverages.jpg" alt="" /><p>BEVERAGES</p></div>
        <div className="flex flex-col items-center gap-4"><img src="/images/breads.jpg" alt="" /><p>BREADS</p></div>
        <div className="flex flex-col items-center gap-4"><img src="/images/pasta.jpg" alt="" /><p>PASTA</p></div>
        <div className="flex flex-col items-center gap-4"><img src="/images/salads.jpg" alt="" /><p>SALADS</p></div>
        <div className="flex flex-col items-center gap-4"><img src="/images/sweet.jpeg" alt="" /><p>SWEET</p></div>
      </div>

      <div className="w-full h-auto mx-auto  flex mt-10 content"> 
      <div className="w-full h-auto  px-4 flex flex-wrap justify-evenly gap-12 cards">

      <div className="card gap-2">
      <p className="text-sm text-center font-bold text-[#CB8A2D]">BREAKFAST</p><p className="text-2xl font-serif text-center ">"These 23 Pancake Recipes Take Breakfast to a Whole New Level"</p>
      <div className="card-img" ><img src="/images/pancake.webp" alt="" className="h-56" /></div>
      <div className="flex flex-col items-center justify-evenly gap-4 px-8 text-[#CB8A2D] "> 
      <p className="font-bold text-2xl hover:underline hover:cursor-pointer">Pancake Recipes</p>
      <p className="text-[#90B274]">Look no further for brunch inspiration. These incredible pancake recipes—both sweet and savory—will become your new go-to weekend staples.</p><br />
      <Link href={'/card1'}>
      <button className="px-6 py-2">Read More</button>
      </Link>
      </div>
      </div>
     

      <div className="card gap-2">
      <p className="text-sm text-center font-bold text-[#CB8A2D]">CUISINE</p><p className="text-2xl font-serif text-center">"Fresh and Flavorful: Creative Leafy Salad Recipes to Enjoy"</p>
      <div className="card-img card-1" ><img src="/images/leafysalad.jpg" alt="" className="h-56" /></div>
      <div className="flex flex-col items-center justify-evenly gap-4 px-8 text-[#CB8A2D] "> 
      <p className="font-bold text-2xl hover:underline hover:cursor-pointer">SALAD Recipes</p>
      <p className="text-[#90B274]">The green salad is a timeless element to any meal, equally at home as a fresh brunch side, the main dish for lunch, or a starter for dinner. Our best green salad recipes are flavorful, simple, and sure to please...</p>
      <Link href={'/card2'}>
      <button className="px-6 py-2">Read More</button>
      </Link>
      </div>
      </div>

      <div className="card gap-2">
      <p className="text-sm text-center font-bold text-[#CB8A2D]">APPETIZER</p><p className="text-2xl font-serif text-center">"Irresistible Avocado Dishes to Elevate Your Meals"</p>
      <div className="card-img card-2" ><img src="/images/avacado.jpg" alt="" className="h-56" /></div>
      <div className="flex flex-col items-center justify-evenly gap-4 px-8 text-[#CB8A2D] "> 
      <p className="font-bold text-2xl hover:underline hover:cursor-pointer">Avacado Recipes</p>
      <p className="text-[#90B274]">This creamy, green fruit is good in more than guac! Follow our best avocado recipes for pasta, sandwiches, scrambled eggs and more.</p>
      <Link href={'/card3'}>
      <button className="px-6 py-2">Read More</button>
      </Link>
      </div>
      </div>

      <div className="card gap-2">
      <p className="text-sm text-center font-bold text-[#CB8A2D]">CUISINE</p><p className="text-2xl font-serif text-center">"Wholesome and Hearty Soup Recipes for Every Appetite"</p>
      <div className="card-img card-3" ><img src="/images/soup.jpeg" alt="" className="h-56" /></div>
      <div className="flex flex-col items-center justify-evenly gap-4 px-8 text-[#CB8A2D] "> 
      <p className="font-bold text-2xl hover:underline hover:cursor-pointer">Soup Recipes</p>
      <p className="text-[#90B274]">You'll want to build tonight's dinner around these deliciously healthy soups—from brothy stews to rich chilis and creamy bowls, there's something</p>
      <Link href={'/card4'}>
      <button className="px-6 py-2">Read More</button>
      </Link>
      </div>
      </div>

      <div className="card gap-2">
      <p className="text-sm text-center font-bold text-[#CB8A2D]">APPETIZER</p><p className="text-2xl font-serif text-center">"Nutritious and Delicious Granola Recipes for a Healthy Breakfast"</p>
      <div className="card-img card-4" ><img src="/images/granola.jpg" alt="" className="h-56" /></div>
      <div className="flex flex-col items-center justify-evenly gap-4 px-8 text-[#CB8A2D] "> 
      <p className="font-bold text-2xl hover:underline hover:cursor-pointer">Granola Recipes</p>
      <p className="text-[#90B274]">Homemade granola with rolled oats is the perfect healthy breakfast dish when you crave something sweet and crunchy. Each of these recipes...</p>
      <Link href={'/card5'}>
      <button className="px-6 py-2">Read More</button>
      </Link>
      </div>
      </div>

      <div className="card gap-2">
      <p className="text-sm text-center font-bold text-[#CB8A2D]">APPETIZER</p><p className="text-2xl font-serif text-center">"Mastering the Art of Coffee: Brewing Techniques and Flavorful Recipes"</p>
      <div className="card-img card-5" ><img src="/images/coffee.png" alt="" className="h-56" /></div>
      <div className="flex flex-col items-center justify-evenly gap-4 px-8 text-[#CB8A2D] "> 
      <p className="font-bold text-2xl hover:underline hover:cursor-pointer">Coffee Tips</p>
      <p className="text-[#90B274]">Coffee, with its rich aroma and invigorating taste, has become an integral part of many people’s daily routines. Whether you enjoy it in the morning to kick-start your day or savor it during a cozy afternoon</p>
      <Link href={'/card6'}>
      <button className="px-6 py-2">Read More</button>
      </Link>
      </div>
      </div>

      <div className="card gap-2">
      <p className="text-sm text-center font-bold text-[#CB8A2D]">APPETIZER</p><p className="text-2xl font-serif text-center">"Delicious Pasta Recipes: From Classic to Creative Dishes"</p>
      <div className="card-img card-6" ><img src="/images/spaghetti.webp" alt="" className="h-56" /></div>
      <div className="flex flex-col items-center justify-evenly gap-4 px-8 text-[#CB8A2D] "> 
      <p className="font-bold text-2xl hover:underline hover:cursor-pointer">Pasta Recipes</p>
      <p className="text-[#90B274]">Explore the world of pasta with these delicious recipes that range from classic favorites to creative new dishes. Perfect for any occasion, these dishes will elevate your pasta game and satisfy your cravings.

</p>
      <Link href={'/card7'}>
      <button className="px-6 py-2 ">Read More</button>
      </Link>
      </div>
      </div>

      <div className="card gap-2">
      <p className="text-sm text-center font-bold text-[#CB8A2D]">BREAKFAST</p><p className="text-2xl font-serif text-center">"Mastering the Art of Poached Eggs: Tips and Recipes
      "</p>
      <div className="card-img card-7" ><img src="/images/eggs.webp" alt="" className="h-56" /></div>
      <div className="flex flex-col items-center justify-evenly gap-4 px-8 text-[#CB8A2D] "> 
      <p className="font-bold text-2xl hover:underline hover:cursor-pointer">Egg Recipes</p>
      <p className="text-[#90B274]">Perfectly poached eggs can elevate any meal, adding a touch of elegance and flavor.From breakfast classics to creative dishes, learn how to make poached eggs that are both delicious and impressive.</p>
      <Link href={'/card8'}>
      <button className="px-6 py-2">Read More</button>
      </Link>
      </div>
      </div>
</div>
      
     
      <Sidebar/>
      </div>
     <Divider/>
    <Newsletter/>
      </div>
  
  );
}
