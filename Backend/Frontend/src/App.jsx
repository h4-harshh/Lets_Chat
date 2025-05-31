import React from 'react';
import Left from './Home/Leftpart/Left';
import Right from './Home/Rightpart/Right';
import Signup from './components/Signup';
import Login from './components/Login';
import  { Toaster } from 'react-hot-toast';
// import Loading from './components/Loading.jsx';
import { useAuth } from './context/AuthProvider.jsx'
import {Navigate, Route, Routes} from 'react-router-dom';


const App = () => {

  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);

  return (
    
    <>
      <Routes>
        <Route path='/' element={
          authUser ? (
            // <div className=''>
            //   <div className='flex h-screen'>
            //     <Left />
            //     <Right />
            //   </div>
            // </div>
            <div className="drawer lg:drawer-open">
                <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Right />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu w-80 min-h-full bg-black text-base-content">
                    <Left />
                  </ul>
                </div>
              </div>
          ) : (<Navigate to={"/login"} />)
        } />
        <Route path='/login' element={authUser ? <Navigate to="/" />:<Login/>} />
        <Route path='/signup' element={authUser ? <Navigate to="/" />:<Signup/>} />
        {/* <Route path='/loading' element={<Loading/>} />       */}
      </Routes>
      <Toaster/>
    </>

  )
}

export default App
