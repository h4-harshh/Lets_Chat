import React, { useEffect,useRef } from 'react';
import Message from './Message';
import Loading from '../../components/Loading.jsx'
import useGetMessage from '../../context/useGetMessage.js';
import useGetSocketMessage from '../../context/useGetSocketMessage.js';

const Messages = () => {
  const {loading,messages}=useGetMessage();
  useGetSocketMessage()   //listening incomming messages

  const lastMsgRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({behavior:"smooth" });
      }
    },100)
  },[messages])


  return (
    <div className='flex-1 overflow-y-auto' style={{maxHeight:"calc(90vh - 10vh)"}}>
        
        {loading?(<Loading/>):(messages.length>0 && messages.map((message,index)=>(
          <div key={message._id || `message-${index}`} ref={lastMsgRef}>
            <Message  message={message}/>
          </div>
        )))}

        {!loading && messages.length===0 && (
          <div>
            <p className='text-center mt-[20%]'>
              Say! Hi to start the conversation
            </p>
          </div>
        )}
    </div>
  )
}

export default Messages



