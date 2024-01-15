/* eslint-disable no-unused-vars */
import React from 'react'
import {logo} from '../assets/index'
import { Link } from 'react-router-dom'
import { GrGallery } from "react-icons/gr"
import { MdOutlineCreate } from "react-icons/md";
import { pixel } from '../assets/index';

const Header = () => {
  return (
    <div className="bg-gray-400 text-gray-400 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
    <Link to="/" className="mr-4">
      <img src={pixel} alt="Logo" className="h-12 w-auto"/>
    </Link>

  </div>
  <div className="flex items-center space-x-4">
  
    <Link to='createpost' className="hover:text-blue-400">
        <MdOutlineCreate color='black' size={24}/>
    </Link>
    <Link to ='/gallery' className="hover:text-blue-400">
        <GrGallery color='black' size={24}/>
    </Link>
   
  </div>
  
</div>
  )
}

export default Header
