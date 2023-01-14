import { useEffect } from "react";
import { useState } from "react";

function LocationISS({location,userloc}){
    const {latitude,longitude}=location;
      
     console.log(location)
    // const distance =0;
    
    // get user location
    const userLat=userloc.latitude;
    






    return (
        <div>
            <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">LATITUDE</th>
      <th scope="col">LONGITUDE</th>
      <th scope="col">DISTANCE</th>
    </tr>
  </thead>
  <tbody>
    
         <tr>
         <th scope="row">1</th>
         <td>{latitude}</td>
         <td>{longitude}</td>
         <td>{userLat}</td>
         </tr>
    
    
  </tbody>
</table>
        </div>
    )
};

export default LocationISS;