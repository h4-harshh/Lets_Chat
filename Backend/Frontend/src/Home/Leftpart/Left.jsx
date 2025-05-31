import React from 'react';
import Search from './Search.jsx';
import Users from './Users.jsx';
import Logout from './Logout.jsx';

const Left = () => {
  return (
    <div className='w-full   bg-black text-gray-300' >
        <Search/>
        <div style={{minHeight:"calc(84vh - 10vh)"}}>
          <Users/>
        </div>
        <Logout/>
    </div>
  )
}

export default Left