import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getUserFavorites, getAllFavorites, saveUserFavorites, getUserSpeciesIdList} from '../Controllers/FavoritesController';
import { speciesList } from '../Controllers/mockData';
import { getSpeciesById } from '../Controllers/PerenualApiController';
import { apiKey } from '../Config/perenualApiKey';


const FavoritesScreen = ({token, uid}) => {


// export const getSpeciesById = (token, id, apiKey) => {
//     fetch(baseUrl + `/species/details/${id}?key=${apiKey}`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     }).then(response => console.log(response));
// }




    const [fave, setFave] = useState([]);
    const [species, setSpecies] = useState([]);
    const [data, setData] = useState([]);
    // console.log('react data', data)


    // let faveArray = [];
    // {data?.map((fave => faveArray.push(fave.speciesId)))}
    // console.log(faveArray + "fave array")



    // const list = data.map((fave => console.log(fave)))
//    const list = data?.map((fave => console.log(`https://perenual.com/api/species/details/${fave.speciesId}?key=${apiKey}`)))
//    const resultsList = data?.map((fave => fetch(`https://perenual.com/api/species/details/${fave.speciesId}?key=${apiKey}`)))
//    const list = resultsList.data



//  {data?.map((favorite => <ul>
//         <li>{console.log(favorite.speciesId)}</li>
//     </ul>))}





    const handleClick = () => {
        // getUserFavorites(token, uid);
        console.log(uid)
        // console.log(data.id)
        console.log(token)
      }


    const fetchUserFavorites = async () => {
        const responseData = await getUserFavorites(token, uid)
        if (responseData) {
            setData(responseData)
            // console.log(responseData)
        }
    }


    const fetchUserSpeciesIdList = async () => {
        const responseData = await getUserSpeciesIdList(token, uid)
        if (responseData) {
            setData(responseData)
            console.log(responseData)
        }
    }

    // document.body.onload = fetchUserSpeciesIdList; 


    // const showFavorites = async () => {
    //     if ()
    // }
    




    // const body = document.body;
    // body.onload = fetchUserFavorites;


    // const fetchAllFavorites = async () => {
    //     const responseData = await getAllFavorites(token)
    //     if (responseData) {
    //         setData(responseData)
    //     }

    // }    

    // const saveFavorites = async () => {
    //     const responseData = await saveUserFavorites(token, uid)
    //     if (responseData) {
    //         setData(responseData)
    //     }

    // }    
    

    // const faveList = data.map(id => data.id)

    const fetchSpecies = async () => {
        const responseData = await getSpeciesById(token, 3, apiKey)
        // console.log(data?.map((id => `https://perenual.com/api/species/details/${id}?key=${apiKey}`)))
        if (responseData) {
            setSpecies(responseData)
            console.log(responseData)
        }
    }


    const listFaves = async () => {

            fave.forEach((id) => fetchSpecies(id))
        
    }

    // array1.forEach((element) => console.log(element));


    // async function fetchMoviesJSON() {
    //     const response = await fetch(baseUrl);
    //     const movies = await response.json();
    //     return movies;
    //   }
      
    //   fetchMoviesJSON().then(movies => {
    //     movies; // fetched movies
    //   });

    // console.log(displayGarden)


    // const list = speciesList.data
    // const list = speciesList.data[data.id]

    // const pass = list.forEach((element) => console.log(element.id + " " +  element.common_name));
    // console.log('specieslist' + list.forEach((element => console.log(element.id))))

    // need to pass favortie id into array index


//     console.log(list);
//     const show = (data, list) => {
        
//         if (data.id = list.id) {
//             // console.log(pass)
//             {list?.map((species=> <ul>
//         <li>{species.id}</li>
//         <li>{species.scientific_name}</li>
//         <li>{species.common_name}</li>
//         <img src={species.default_image?.thumbnail}></img>
//     </ul>))}
//             }
// }       




// const baseUrl = `https://perenual.com/api/species/details/${fave.id}?key=${apiKey}`



  return (
  <>
    <NavigationBar />
    <div>
        <p>buttons for testing</p>
        <button onClick={handleClick}>user id in console</button>
        {/* <button onClick={fetchUserFavorites}>user favorites get</button> */}
        <button onClick={fetchUserSpeciesIdList}>species id list from favorites table</button>
        <button onClick={fetchUserFavorites}>display favorites table from sql</button>
        <button onClick={fetchSpecies}>species</button>
        <button onClick={listFaves}>listFaves</button>
        {/* <button onClick={saveFavorites}>testing post favorite</button> */}
        {/* <p>{show}</p> */}
        {/* {list?.map((species=> <ul>
            <li>{species.id}</li>
            <li>{species.scientific_name}</li>
            <li>{species.common_name}</li>
            <img src={species.default_image?.thumbnail}></img>
        </ul>))} */}
        {data?.map((favorite => <ul>
            <li>{favorite.id}</li>
            <li>{favorite.userId}</li>
            <li>{favorite.speciesId}</li>
            <img src={favorite?.thumbnail}></img>
        </ul>))}

        {/* {data?.map(

        (id => <ul>
            <li>{`https://perenual.com/api/species/details/${id}?key=${apiKey}`}</li>
        </ul>))} */}
        
    </div>
  </>
  );

}

export default FavoritesScreen;
