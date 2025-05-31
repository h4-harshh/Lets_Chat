import React,{useState} from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const Logout = () => {

  const [loading,setLoading] = useState(false);

  const handleLogout= async ()=>{
    setLoading(true);
    try {
      const res=axios.post('/api/user/logout');
      localStorage.removeItem("LetsChat");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout",error);
      toast.error("Error in Logout",error)
    }
  }
  

  return (
    <>
    <hr />
    <div className="h-[8vh] flex justify-center items-stretch">
        <div>
            {/* <BiLogOutCircle className='text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1' onClick={handleLogout} /> */}
            <div className="w-full dropdown dropdown-right dropdown-end">
            <div tabIndex={0} role="button" className="btn mt-3 w-56 bg-slate-800 text-white hover:bg-slate-700" onClick={handleLogout}>Logout</div>
            {/* <ul tabIndex={0} className="bg-slate-800 text-white dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow">
              <li><a><BiLogOutCircle className='text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1' onClick={handleLogout} /></a></li>
              <li><a>Item 2</a></li>
            </ul> */}
          </div>
        </div>        
    </div>
    </>
  )
}

export default Logout