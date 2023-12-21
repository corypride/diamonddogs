import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar';
import '../App.css';
import { getSpeciesById, getAllSpecies} from '../Controllers/PerenualApiController';
import { apiKey} from '../Config/perenualApiKey'
import { mockData } from '../Controllers/mockData'





const GardenScreen = ({token, uid}) => {
    const [data, setData] = useState([]);
    console.log('species data', data)
    // console.log(apiKey)

    


    // const handleClick = () => {
    //     getUserspecies(token, uid);
    //     console.log(uid)
    //     console.log(token)
    //   }


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
            {/* <li>{species.userId}</li>
            <li>{species.speciesId}</li>
            <img src={species?.thumbnail}></img> */}
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
