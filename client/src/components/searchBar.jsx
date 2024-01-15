import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const prompts = ["Search prompt 1", "Search prompt 2", "Search prompt 3"]; // Array of prompts
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
      }, 10000); // Delay before typing the next prompt
    }

    return () => clearTimeout(timeout);
  }, [searchValue, currentPromptIndex, prompts]);

  return (
    <div>
      <input
        type="text"
        placeholder={searchValue}
        
        onChange={() => {}}
        disabled
        style={{ width: '300px', padding: '5px' }}
      />
    </div>
  );
};

export default SearchBar;
