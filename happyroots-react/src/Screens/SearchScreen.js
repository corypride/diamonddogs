import React from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';


const SearchScreen = () => {

    const handleSearch = () => {
        console.log("search test")
    }

  return (
  <>
    <NavigationBar />
    <div>
        <p><button onClick={handleSearch}>Search</button></p>
    </div>
  </>
  );

}

export default SearchScreen;