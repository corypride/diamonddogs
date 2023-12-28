import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "../styles/SearchBar.css";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    // The line below is a placeholder URL for the API we want to fetch data from. Link to Perenual API.
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((user) => {
        return (
          value &&
          user && 
          user.name && 
          user.name.toLowerCase().includes(value)
        );
      });
      setResults(results);
    });
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }


  const clearInput = () => {
    setInput("");
    setResults([])
  };

  return (
    <div className='input-wrapper'>
      <input 
        placeholder="Type to search..." 
        value={input} 
        onChange={(e) => handleChange(e.target.value)} 
      />
      <div className="searchIcon">
        {input.length === 0 ? (
          <FaSearch id="search-icon" />
        ) : (
          <IoMdClose id="clearBtn" onClick={clearInput} />
        )} 
      </div>
    </div>
  );
};

export default SearchBar;

