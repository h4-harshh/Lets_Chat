// // import React, { useEffect } from "react";
// // import { useSocketContext } from "./SocketContext.jsx";
// // import useConversation from "../zustand/useConversation.js";
// // import sound from "../assets/notification.mp3";


// // const useGetSocketMessage = () => {
// //   const { socket } = useSocketContext();
// //   const { messages, setMessage } = useConversation();

// //   useEffect(() => {
// //     socket.on("newMessage", (newMessage) => {
// //       const notification = new Audio(sound);
// //       notification.play();
// //       setMessage([...messages, newMessage]);
// //     });
// //     return () => {
// //       socket.off("newMessage");
// //     };
// //   }, [socket, messages, setMessage]);
// // };
// // export default useGetSocketMessage;




// useEffect(() => {
//   console.log("Socket:", socket);
//   if (socket) {
//     socket.on("newMessage", (newMessage) => {
//       const notification = new Audio(sound);
//       notification.play();
//       setMessage([...messages, newMessage]);
//     });
    
//     return () => {
//       socket.off("newMessage");
//     };
//   }
// }, [socket, messages, setMessage]);


import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import sound from "../assets/notification.mp3";

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation();

  useEffect(() => {
    // Check if socket is available before attaching event listeners
    if (socket) {
      console.log("Socket:", socket); // Debugging statement

      // Listen for new messages
      socket.on("newMessage", (newMessage) => {
        const notification = new Audio(sound);
        notification.play();
        setMessage([...messages, newMessage]);
      });

      // Cleanup function to remove event listeners
      return () => {
        if (socket) {
          socket.off("newMessage");
        }
      };
    }
  }, [socket, messages, setMessage]); // Dependencies

  // Return nothing as this hook is just used for side-effects
};

export default useGetSocketMessage;
