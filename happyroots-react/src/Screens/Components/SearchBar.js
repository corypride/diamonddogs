import React, {useState, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import "../styles/SearchBar.css";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    // The line below is a placeholder URL for the API we want to fetch data from. Link to Perenual API.
    //fetch("https://jsonplaceholder.typicode.com/users")
    fetch("https://perenual.com/api/species-list?key=sk-p0RY6572ddd57bba23207")
      .then((response) => response.json())
      .then((json) => {
      const results = json.data.filter((plant) => {
        return (
          value &&
          plant &&
          plant.common_name && 
          plant.common_name.toLowerCase().includes(value)
        );
      });
      console.log(json);
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
        placeholder="Search plant names..." 
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
