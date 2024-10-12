import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';

export default function Card1(){
    return(
        <div className="mt-20 ">
      <div className="w-11/12 h-auto mx-auto   mt-40 flex ">
      <div className="w-2/3 h-auto flex flex-col gap-12 ">

      
      </div>
      <Sidebar/>
      </div>
      
      <Divider/>
      <Newsletter/>
      </div>
    )
}