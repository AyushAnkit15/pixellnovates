/* eslint-disable no-unused-vars */
import React from "react";
import { logo } from "./assets/index";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
//import { Typography } from "material-tailwind/react";
import FooterWithLogo from "./components/Footer";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Search";


import { Typography } from "@mui/material";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-height: 100vh;   display: grid; grid-template-areas: 'header' 'content' 'footer'; grid-template-columns: 1fr; grid-template-rows: minmax(var(--spectrum-global-dimension-size-800), auto) 1fr auto;">
        <Header />
        <div className="flex flex-col  mt-4 lg:mt-8 xl:mt-12">
          <div className="text-section mb-4  ">
            <Typography
              variant="h1"
              align="center"
              fontFamily={'-moz-initial'}
              fontWeight={"bolder"}
              className="text-lg font-semibold mb-2 xs:text-red-500"
            >
              Fantasize, Fabricate, Revolutionize
            </Typography>

          

          
            {/* <Typography
            variant="h6"
            align="center"
            fontFamily={"cursive"}
            fontWeight={"bold"}
          >
            Start with a prompt from our gallery of inspirational examples.
          </Typography> */}
          </div>
          <div className="main-container mx-4 lg:mx-auto lg:max-w-6xl mt-8 lg:mt-12">
            <main>
              <Routes>
                <Route path="/createpost" element={<CreatePost />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<Home />} />
              </Routes>
            </main>
          </div>
        </div>
        <FooterWithLogo />
      </div>
    </BrowserRouter>
  );
};

export default App;
