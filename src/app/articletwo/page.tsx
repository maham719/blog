import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
export default function Articletwo(){
    return (
     
         <div className="mt-20 ">
      <div className="w-11/12 h-auto mx-auto  content  mt-40 flex ">
        <div className=" article-1 article-content w-2/3 h-auto flex flex-col gap-12 ">
        <h1  className="font-bold font-serif text-4xl">67 Muffin Recipes You’ll Want to Make Again and Again</h1>
        <p>Rise and shine! It's time for muffins. Our best muffin recipe ideas—like peanut butter-banana, blueberry cream, cinnamon doughnut and caramel apple—make sure there won't be any sleepyheads at breakfast.</p>
        <h1  className="font-bold font-serif text-4xl">Basic Banana Muffins</h1>
        <p>This banana muffin recipe goes over so well with kids. Not only are these banana bread muffins like cupcakes, but they’re ready, start to finish, in just half an hour! —Lorna Greene, Harrington, Maine</p>
        <Link href="https://www.tasteofhome.com/recipes/basic-banana-muffins/"><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
        <hr className="border-2"/>
 <img src="/images/muffin2.jpg" alt="" />
 <h1  className="font-bold font-serif text-4xl">Basic Banana Muffins</h1>
        <p>Both of my daughters love these chocolate chip muffins! I usually double this chocolate chip muffin recipe so I have extras to keep in the freezer for a quick breakfast or snack. —Lori Thompson, New London, Texas</p>
        <Link href="https://www.tasteofhome.com/recipes/chocolate-chip-muffins/"><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
        <hr className="border-2"/>

        <img src="/images/muffin3.jpg" alt="" />
        <h1  className="font-bold font-serif text-4xl">Lemon-Raspberry Streusel Muffins</h1>
        <p>Fresh from the oven, these attractive, delicious muffins make a great accompaniment to any breakfast or brunch. I usually double the recipe because they seem to disappear the minute I set them out. —Marie Herr, Berea, Ohio</p>
        <Link href="https://www.tasteofhome.com/recipes/lemon-raspberry-streusel-muffins/"><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
        <hr className="border-2"/>
        <img src="/images/muffin4.jpg" alt="" />

        <h1  className="font-bold font-serif text-4xl">Cinnamon Muffins</h1>
        <p>Made with a dash of nutmeg in the batter, these moist cinnamon muffins are sweet, buttery and delicious.</p>
        <Link href="https://www.tasteofhome.com/recipes/cinnamon-muffins/"><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
        <hr className="border-2"/>

        <img src="/images/muffin5.jpg" alt="" />

        <h1  className="font-bold font-serif text-4xl">Mini Cherry Muffins</h1>
        <p>These pretty muffins are perfect for Christmas morning. Make them the night before and keep them on the counter in an airtight container. —Taste of Home Test Kitchen</p>
        <Link href="https://www.tasteofhome.com/recipes/mini-cherry-muffins/"><button className="w-32 h-10 text-white bg-[#F64900]">Go to Recipe</button></Link>
        <hr className="border-2"/>
      <Link href={'https://www.tasteofhome.com/collection/muffin-recipes-worth-waking-up-for/'}> <h1  className="font-bold font-serif text-2xl hover:text-[#F64900]">Read Full Article On Site</h1></Link>
        </div>
        <Sidebar/>
        </div>
        <Divider/>
        <Newsletter/>
        </div>  
    )
}