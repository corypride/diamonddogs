import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getSpeciesById, getAllSpecies, apiKey } from '../Controllers/PerenualApiController';



const GardenScreen = ({token, uid}) => {
    const [data, setData] = useState([]);
    console.log('react data', data)


    // const handleClick = () => {
    //     getUserFavorites(token, uid);
    //     console.log(uid)
    //     console.log(token)
    //   }


    const fetchSpecies = async () => {
        const responseData = await getAllSpecies(apiKey)
        if (responseData) {
            setData(responseData)
        }
    }




    


  return (
  <>
    <NavigationBar />
    <div>

        <button onClick={fetchSpecies}>species list</button>
        {/* <button onClick={}>testing post favorite</button> */}

        {/* <div>
            <p>Data</p>
            <p>{dummyData.common_name}</p>
            <p>{dummyData.id}</p>
            <p>{dummyData.other_name}</p>
                {dummyData.origin.map((list => <ol>
                <li>{list}</li>
                </ol>))}
                {dummyData.origin.map((fave => <ol>{fave}</ol>))}
        </div> */}

    </div>
  </>
  );

}

export default GardenScreen;
