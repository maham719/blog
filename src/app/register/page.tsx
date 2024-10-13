import Divider from '../components/Divider';
import Newsletter from '../components/Newsletter';

export default function Request(){
    return(
        <div className="mt-28  h-full">
     
     <div  className=" w-4/5 h-screen flex justify-between mx-auto  items center register-content ">
      
        <div className=" reg-sec-1 w-2/4 h-3/4 text-[#F64900] text-center flex flex-col items-center justify-evenly gap-3" >
         <h1 className="font-serif text-5xl font-bold ">
           
               Please Sign Up
            </h1>
            <p className="font-bold text-xl">it's free and always will be.</p>
            <img src="/images/signup.png" alt="" />
            </div>
        
        <div className="reg-sec-2 w-2/4 h-full">
        <form
        action=""
        className="w-full h-full flex flex-col py-16 gap-9 mt-12 form"
      >
        <div className="input-1 w-full flex gap-7">
          <input type="text" name="" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Display Name" className="w-full" />
        <input type="email" placeholder="Email Address" className="w-full" />
        <div className="input-2 w-full flex gap-9">
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="reg-btn w-full flex gap-7">
          <button className="w-full bg-[#F64900]  text-white py-2">Register</button>
          <button className="w-full bg-gray-700 text-white py-2">Sign In</button>
        </div>
      </form>
        </div>
        </div>
        <Divider/>
        <Newsletter/>
        </div>
    )
}