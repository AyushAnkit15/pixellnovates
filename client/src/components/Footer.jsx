//import { Typography } from "@material-tailwind/react";
// eslint-disable-next-line no-unused-vars
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter ,BsLinkedin } from 'react-icons/bs';
import { logo } from '../assets';
import { pixel } from '../assets';

import { Link } from 'react-router-dom';
 import { Typography } from "@mui/material"
export function FooterWithLogo() {
  return (
    <footer className="w-full bg-gray-400 p-8 mt-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-green text-center md:justify-between">
      <Link to='/' >   <img src={pixel} alt="logo-ct" className="w-10" /></Link>
     
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="https://www.linkedin.com/in/shivam-kumar-a82a06265/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <BsLinkedin/>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
            <BsFacebook/>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://github.com/AyushAnkit15/mysaas"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <BsGithub/>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.instagram.com/shiv__kush/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <BsInstagram/>
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 PIXELLNOVATE
      </Typography>
    </footer>
  );
}

export default FooterWithLogo