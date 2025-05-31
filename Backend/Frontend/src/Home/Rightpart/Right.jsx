import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConverstation from '../../zustand/useConversation.js';
import { useAuth } from '../../context/AuthProvider.jsx';
import {CiMenuFries} from 'react-icons/ci';

const Right = () => {
  const {selectedConversation,setSelectedConversation}=useConverstation();

  useEffect(()=>{
    return setSelectedConversation(null)
  },[setSelectedConversation]);

  return (
        <div className='w-full bg-slate-900 text-gray-300'>
    <div>
            {!selectedConversation ? (<NoChatSelected/>):(<>
              <Chatuser />
              <div className='flex-1 overflow-y-auto' style={{minHeight:"calc(90vh - 10vh)"}}>
                <Messages/>
              </div>
              <Typesend/>
              </>)}
        </div>
    </div>
  )
}

export default Right


const NoChatSelected=()=>{
  const [authUser]=useAuth();

  const fullname = authUser?.user?.fullname || "";
  console.log(fullname);
  return(
    <>
      <div className='relative'>
        <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden absolute mt-2 left-5"
          >
            <CiMenuFries className="text-white text-3xl" />
        </label>
        <div className='flex flex-col h-screen items-center justify-center'>
        <h1 className='text-5xl font-serif text-white items-start justify-start'><span>Lets</span><span className='text-green-500' >Chat</span></h1>
          <h1 className='text-center'>Welcome{" "} <span className='font-semibold text-xl'>{fullname}</span><br />
            No chat selected, please start conversation by selecting anyone to your contacts
          </h1>
        </div>
      </div>
    </>
  )
}