/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import SearchBar from "../components/SearchBar.component";
import { RiEdgeNewFill } from "react-icons/ri";
import Cards from "../components/Card";
import ImageCarousel from "../components/imageCarousel";

import { data, data2 } from "../constants/data";
import { Link } from "react-router-dom";
import { motion  ,AnimatePresence  ,useScroll  ,useSpring  ,useTransform} from 'framer-motion';
import { slideAnimation ,headContainerAnimation , fadeAnimation , headTextAnimation , headContentAnimation , transition ,DrawOutlineButton} from '../components/motion';
import Montserrat from '../Montserrat-Bold.ttf'
const HomePage = () => {
  return (
    <motion.div className="flex flex-col lg:space-x-4 ">
      {/* <div className="w-full lg:w-1/3 lg:mr-4 mb-4 lg:mb-0">

    </div> */}
      <ImageCarousel />

      <div className=" w:full ">
        <SearchBar />
        <Link to='/createpost'>
        <button className="bg-gray-400 text-black rounded-md p-2">
          <RiEdgeNewFill />
        </button>
        </Link>
       
      </div>

      <div className="content">
        <div className="text-section mb-4  ">
          <Typography
            variant="h1"
            align="center"
            fontWeight={"bolder"}
            className="text-lg font-semibold mb-2"
          >
            Get inspired
          </Typography>
          <Typography
          
            variant="h3"
            align="center"
            fontFamily={'montserrat'}
            fontWeight={"bold"}
          >
            Start with a prompt from our gallery of inspirational examples.
          </Typography>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
          {/* <!-- Your cards content here --> */}
          {data.map(({ id, prompt, img }) => (
            <Cards key={id} prompt={prompt} img={img} />
          ))}
          <div className="mt-5">
            <Link to ='/gallery'>
            <button className="bg-gray-400 text-black rounded-md p-2">
              SEE MORE
            </button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="text-section mb-4 mt-10 ">
        <Typography
          variant="h1"
          fontWeight={"bold"}
          className="text-lg font-semibold mb-2"
        >
          In exploration
        </Typography>
        <Typography variant="h3" fontFamily={'montserrat'} fontWeight={"bold"}>
          A look at what we’re dreaming up.
        </Typography>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
        {/* <!-- Your cards content here --> */}
        {data2.map(({ id, prompt, img }) => (
          <Cards  isFooterBlurred key={id} prompt={prompt} img={img} />
        ))}
        <div className="mt-5">
          <button className="bg-gray-400 text-black  rounded-md p-2">
            SEE MORE
          </button>
         
          
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
