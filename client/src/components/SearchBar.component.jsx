/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect , useState } from 'react';
import { TextField } from '@mui/material'
const SearchBar = () => {

    const prompts = [" beautiful snow leopard", "earth as seen from exoplanet", "Snake in dense tropical rain forest"]; // Array of prompts
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let timeout;

    if (searchValue !== prompts[currentPromptIndex]) {
      timeout = setTimeout(() => {
        setSearchValue((prevValue) =>
          prompts[currentPromptIndex].substring(0, prevValue.length + 1)
        );
      }, 100); // Typing speed
    } else {
      timeout = setTimeout(() => {
        setSearchValue('');
        setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
      }, 9000); // Delay before typing the next prompt
    }

    return () => clearTimeout(timeout);
  }, [searchValue, currentPromptIndex, prompts]);

  return (
    <div>
<div>
      <TextField
        type="text"
        variant='filled'
        color='black'
        placeholder={searchValue}
        fullWidth
        className="flex-1 p-2 rounded-md border-none focus:outline-none mr-2"
        focused
        onChange={() => {}}
    
        style={{ width:'fullwidth', padding: '5px' , color:"red"}}
      />
    </div>
    </div>
  )
}

export default SearchBar