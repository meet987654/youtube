import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from "./../utils/appSlice"; 
import { YT_SEARCH_API } from '../utils/constants';

const Head = () => {
    const dispatch = useDispatch();// useDispatch doesn't take any arguments
    const [searchQuery,setSearchQuery]=useState("");
    const handleMenuClick = () => {
        dispatch(toggleSidebar()); // Dispatching the action
    };

    useEffect(()=>{
    //Makingg an api call on every key press
    // only if difference between keystrokes is less than 200 milliseconds
    const timer=setTimeout(()=>getSearchSuggestion(),200);
    return ()=>{
        clearTimeout(timer);
    }
    },[searchQuery] )

    const getSearchSuggestion= async()=>{
        const data=await fetch(YT_SEARCH_API+searchQuery)
        const json=await data.json()
    }

    return (
        <div className='grid grid-flow-col '>
            <div className='col-span-1 flex'>
                <img
                    className='cursor-pointer h-8 ml-4 mt-8'
                    src="https://th.bing.com/th?id=OIP.MO13Yb2PjehyQD7s6Lsx_gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="menu"
                    onClick={handleMenuClick} // Calls handleMenuClick when clicked
                ></img>

                <img
                    className='h-6 mx-4 mt-9'
                    src="https://th.bing.com/th/id/OIP.iIiylyCdQhqhX7_JAVqGUgHaBq?w=346&h=78&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="logo"
                ></img>
            </div>
            <div className='col-span-10 flex mx-10 text-[18px]'>
             
                <input
                    className='bg-transparent border border-gray-400 w-11/12 mt-6 py-[0.55rem] px-2 rounded-l-[30px]'
                    type="text"
                    onChange={(e)=>setSearchQuery(e.target.value)}
                ></input>
                
                
                <button className='pr-4 pl-3 bg-gray-400 border border-gray-400 h-[46px] -mb-3 mt-6 rounded-r-[30px]'>
                    <img className='h-6 px-1'
                        src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
                        alt="search"
                        value={searchQuery}
                        
                    ></img>
                </button>
            </div>
            <div className='col-span-1'>
                <img
                    className='h-7 mt-8 ml-80'
                    src="https://www.iconarchive.com/download/i113145/fa-team/fontawesome/FontAwesome-User.1024.png"
                    alt="user"
                ></img>
            </div>
        </div>
    );
};

export default Head;
