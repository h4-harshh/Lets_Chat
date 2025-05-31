import {useState, useContext , createContext, useEffect} from "react";
import io  from "socket.io-client";
import { useAuth } from "./AuthProvider";



const socketContext=createContext();

export const useSocketContext=()=>{
    return useContext(socketContext);
}


export const SocketProvider=({children})=>{
    const [socket,setSocket]=useState(null);
    const [authUser]=useAuth();
    const [onlineUsers,setOnlineUsers]=useState([]);

    useEffect(()=>{
        if(authUser?.user?._id){
            const socket=io("https://letschat-uusa.onrender.com",{
            query:{
                userId:authUser.user._id,
            },
        });
        setSocket(socket);
        socket.on('getOnlineUsers',(users)=>{
            setOnlineUsers(users);
        });
        return()=>socket.close();
    }else{
        if(socket){
            socket.close();
            setSocket(null);
        }
    }
    },[authUser]);
    return (
        <socketContext.Provider value={{ socket ,onlineUsers}}>
            {children}
        </socketContext.Provider>
    );
};