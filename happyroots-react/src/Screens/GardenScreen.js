import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getSpeciesById, getAllSpecies} from '../Controllers/PerenualApiController';
import { apiKey} from '../Config/perenualApiKey'
import { mockData } from '../Controllers/mockData'





const GardenScreen = ({token, uid}) => {
    const [data, setData] = useState([]);
    console.log('species data', data)


    const fetchSpecies = async () => {
        const responseData = await getAllSpecies(token, apiKey);
        console.log(responseData)
        if (responseData) {
            setData(responseData)
        }
    }





  return (
  <>
    <NavigationBar />
    <div>

        <button onClick={fetchSpecies}>species list</button>
        {/* <button onClick={}>testing post species</button> */}
        <p >{data.common_name}</p>
        {data?.map((species => <ul>
            <li>{species.id}</li>
            <li>{species.common_name}</li>
            <li>{species.cycle}</li>
            <li>{species.sunlight}</li>
            {/* <li>{species.origin.map}</li> */}
            <li>watering : {species.watering}</li>
            {/* <li>{species.default_image?.thumbnail}</li> */}

            <img src={species.default_image?.thumbnail}></img>
        </ul>))}

        {/* <div>
            <p>Data</p>
            <p>{mockData.common_name}</p>
            <p>{mockData.id}</p>
            <p>{mockData.other_name}</p>
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
