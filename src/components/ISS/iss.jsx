import { useState } from 'react';
import './iss.css';
import LocationISS from './location';


function ISS(){
let [location,setlocation]=useState(0);
let [userlocation,setuserlocation]=useState(0)
const URL="http://api.open-notify.org/iss-now.json";
function apicall(){
    fetch(URL).then(res=>res.json()).then(data=> display(data));
}
//   get user location
function getUserLoc(){
   
    const userLocation=(loc)=>{
        console.log(loc)
        // const {latitude,longitude}=loc.coords;
        setuserlocation(loc.coords)
        console.log(userlocation)
        
        }
        function errorCallback(err){
            console.log(err)
        }
        navigator.geolocation.getCurrentPosition(userLocation, errorCallback);

    
  }

function display(loc){
  const {iss_position,...other}=loc;

// JQuery
//   $(".location").html(`ISS is at location of lat: ${latitude} and lon: ${longitude}`)
  
  setlocation(iss_position);
  
  getUserLoc()

  
}




    return(
        <div>
           <div className='iss-container'>
            <h3 className='head'> Want to know where is ISS right now! </h3>
             <p className='text'> Well,  just click on the button below</p>
             <button onClick={apicall} className='btn btn-primary' type='submit'>Location</button>
             
             <p className='location'>calculate distance from your location</p>
             
             <LocationISS location={location} userloc={userlocation} />
            </div> 
        </div>
    );

};

export default ISS;
