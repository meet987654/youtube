import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  // Accessing the correct state property (showSidebar)
  const showSidebar = useSelector((store) => store.app.showSidebar);

  if (!showSidebar) return null; 

  return (
    <div className='w-52 mt-20 text-black mt-3 rounded-lg fixed bg-white'>
       
       <Link to="/"><p className='font-semibold text-lg mx-6 my-4'>Home</p></Link>
      <p className='font-semibold text-lg mx-6 my-4'>Subscriptions</p>
      <ul className='mx-6'>
        <li className='my-2'>Movies</li>
        <li className='my-2'>Music</li>
        <li className='my-2'>Gaming</li>
        <li className='my-2'>Study</li>
        <li className='my-2'>Workout</li>
        <li className='my-2'>Dance</li>
        
      </ul>
      
      <p className='font-semibold text-lg mx-6 my-4'>Subscriptions</p>
      <ul className='mx-6'>
        <li className='my-2'>Movies</li>
        <li className='my-2'>Music</li>
        <li className='my-2'>Gaming</li>
        <li className='my-2'>Study</li>
        <li className='my-2'>Workout</li>
        <li className='my-2'>Dance</li>
        
      </ul>
      
      <p className='font-semibold text-lg mx-6 my-4'>Subscriptions</p>
      <ul className='mx-6'>
        <li className='my-2'>Movies</li>
        <li className='my-2'>Music</li>
        <li className='my-2'>Gaming</li>
        <li className='my-2'>Study</li>
        <li className='my-2'>Workout</li>
        <li className='my-2'>Dance</li>
        
      </ul>
      
      
    </div>
  );
};

export default Sidebar;
