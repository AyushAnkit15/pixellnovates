/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {preview }from '../assets/index'
import  {getRandomPrompt} from '../utils/help'
import FormField from '../components/FormField'
import Loader from '../components/Loader'
import { motion  ,AnimatePresence  ,useScroll  ,useSpring  ,useTransform} from 'framer-motion';
//import classes from '../css/bt.css'
import AnimationControls from "../components/AnimationControls";



import { slideAnimation ,headContainerAnimation , fadeAnimation , headTextAnimation , headContentAnimation , transition ,DrawOutlineButton} from '../components/motion';
const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  
   
  

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data =await response.json() ; 
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch {err=>{
        console.log(err)
      }}finally{
        setGeneratingImg(false)
      }
    }

    else{
      alert('please enter a valid request')
    }
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault() ;
    if(form.prompt && form.photo){
      setLoading(true) ;
      
      try{
        const response  =await fetch("http://localhost:8080/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }, 

          body: JSON.stringify({ ...form }),
        })

        await response.json() ;
        navigate('/')
      }
      catch(err){
alert(err);

      }

      finally{
        setLoading(false)
      }
    }
    else{
      alert('please put valid request')
    }
  };
  return (
    <motion.section   >
      <motion.div {...headTextAnimation}>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Generate an imaginative image through PIXELNNOVATE and share it with the
          community
        </p>
      </motion.div >
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <motion.div className="flex flex-col gap-5" {...slideAnimation('right')}>
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <motion.div className="relative bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3 h-full flex justify-center items-center"  {...headContentAnimation} >
            {form.photo ? (
              <motion.img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain "  
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div className="mt-5 flex gap-5 ">

         
          <motion.button  
          
            type="button"
            onClick={generateImage}
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </motion.button>
        </motion.div>
        <motion.div className="mt-10  bg-slate-900  grid min-h-[200px] place-content-center bg-slate-900 p-4"   {...headTextAnimation} >
          <p className="mt-2 text-[#666e75] text-[14px]">
            ** Once you have created the image you want, you can share it with
            others in the community **
          </p>
          <DrawOutlineButton
          onClick={handleSubmit}
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the Community"}
          </DrawOutlineButton>

          
        </motion.div>
      </form>
    </motion.section>
  );
};

export default CreatePost;
