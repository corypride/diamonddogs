import React from "react";
import ReactGA from "react-ga4";


const saveSpecies = (event) => {
    //event.preventDefault();
    ReactGA.event({
     category: 'Save',
     action: 'saveClick',
     label: 'save species'
   });
}

export default saveSpecies;