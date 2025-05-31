import React,{useState} from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';

const Typesend = () => {
  const [message,setMessage]=useState('');
  const {loading,sendMessages}=useSendMessage();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex h-[10vh] space-x-1 bg-gray-800 items-center justify-center'>
          <div className='w-[70%] mx-4  rounded-xl'>
              <input value={message} type="text" placeholder="Type here" className="bg-gray-900 py-2 w-full border mt-1  border-gray-700 outline-none px-4  rounded-lg bg-transparent" onChange={(e)=>setMessage(e.target.value)}/>
          </div>
          <button className='text-3xl'>    
              <IoSend/>
          </button>
        </div>
    </form>
  )
}

export default Typesend