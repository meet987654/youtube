import React, { useEffect, useState } from 'react';
import ChatMsg from './ChatMsg';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import generateRandomName from "./../utils/helper"
import makeRandomMessage from "./../utils/helper"
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages || []); // Ensure chatMessages is an array
  const [liveMessage,setLiveMessage]=useState("")
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name:generateRandomName(),
          message:makeRandomMessage(50)+" "+makeRandomMessage(50)+"sd  "+makeRandomMessage(50),
        })
      );
    }, 800);

    return () => clearInterval(i); // Clear interval on component unmount
  }, [dispatch]);

  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 rounded-lg shadow-xl bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
      {chatMessages.length > 0 ? (
        chatMessages.map((c, index) => (
          <ChatMsg key={index} name={c.name} message={c.message} />
        ))
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
    <form
     onSubmit={(e)=>{
      e.preventDefault();
      dispatch(
        addMessage({
          name:"meet2",
          message:liveMessage,
        })
      )
      setLiveMessage("");
      }
      
    }
       >
        <div className='w-full p-2 ml-2 border rounded-lg'>
      <input type='text ml'
       className='w-[280px] ml-10 shadow'
       value={liveMessage}
       onChange={(e)=>{
       setLiveMessage(e.target.value)
       }}>
        </input>
      <button className='px-3 py-1 mx-2 bg-gray-200 rounded-lg'>Send</button>
    </div>
    </form>
    </>
  );
};

export default LiveChat;
