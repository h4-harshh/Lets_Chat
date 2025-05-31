import React,{useState} from 'react';
import User from './User';
import '../../index.css'
import useGetAllUsers from '../../context/useGetAllUsers.jsx';


const Users = () => {

  const [allUsers,loading]=useGetAllUsers();
  // console.log(allUsers);

  return (
    <div className='p-1' >
        <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>Messages</h1>
        <div className="py-2 flex-1 overflow-y-auto"  style={{ maxHeight: "calc(84vh - 14vh)" }} 
        >
          
          {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
         

        </div>
    </div>
  )
}

export default Users