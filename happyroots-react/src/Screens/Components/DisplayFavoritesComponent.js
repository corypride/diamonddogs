import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'name', headerName: 'NAME', width: 130 },
//   { field: 'userID', headerName: 'userID', width: 130 },
// ];

export default function DisplayFavorite() {
    const [favoritesArray, setFavorites] = useState([]);

    const handleResponse = async (response) => {
      if(response.ok) {
          const data = await response.json()
          // console.log('data', data)
          return data
      } else return false;
  }

    /**Here, we are fetching student from the api */
    useEffect(()=>{
        fetch("http://localhost:8080/favorites/all")
        .then(res=>res.json())
        .then(favoriteObj=>setFavorites(favoriteObj))
        .catch(e=>console.log(e))
    },[favoritesArray]);

    // const arrayDataItems = console.log(favoritesArray.map((favoriteObj) => <li>{favoriteObj}</li>));

  //   <div>
  //   {favoritesArray.map(jsonObject => {
  //       return(
  //           <div>                   
  //               <p>{jsonObject.id}</p>
  //               <p>{jsonObject.name}</p>
  //               <p>{jsonObject.userId}</p>
  //           </div>
  //           )
  //       })
  //   }
  // </div>
    
    

  return (
    <div style={{ height: 300, width: '40%', margin:'auto', marginBottom:'55px', marginTop:'30px' }}>
        <h2> Favorite Data From Database</h2>
        {/* <p>{handleResponse}</p> */}
        {/* <button onClick={handleResponse}></button> */}
        {/* <ul>{favoritesArray}</ul> */}

      
    </div>
  );
}
