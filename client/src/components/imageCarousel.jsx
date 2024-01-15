/* eslint-disable no-unused-vars */
import React from 'react'
import { useState,useEffect } from 'react';
import { Leopard , Earth , Snake } from '../assets';
import { motion  ,AnimatePresence  ,useScroll  ,useSpring  ,useTransform} from 'framer-motion';
import { slideAnimation ,headContainerAnimation , fadeAnimation , headTextAnimation , headContentAnimation , transition ,DrawOutlineButton} from '../components/motion';
const ImageCarousel = () => {
    const images = [
        Leopard,
        Earth,
        Snake
        
    
        // Add more image URLs here...
      ];
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 12000); // Change image every 10 seconds
    
        return () => clearInterval(interval);
      }, [images.length]);
    
  return (
    <motion.div className="w-full  lg:mx-2 mb-4 lg:mb-0">

    <div className="carousel">
    <img
src={images[currentImageIndex]}
alt={`Image ${currentImageIndex + 1}`}
className=" w-full h-auto "
/>
    </div>
 
  </motion.div>
  )
}

export default ImageCarousel