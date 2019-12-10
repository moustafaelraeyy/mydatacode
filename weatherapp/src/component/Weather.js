import React from 'react';


const Weather =(props)=> {
  return (
    <div className="info">

      {
        props.temperature &&        <p className="info-key"> Temperature : 
         <span className="value"> {props.temperature}</span>
          </p>

      }
      {
        props.city &&               <p className="info-key"> City : 
          <span className="value"> {props.city}</span>
          </p>


      }
      {
        props.country &&               <p className="info-key"> Country :
          <span className="value"> {props.country}</span>
           </p>


      }
      {
        props.humidity &&               <p className="info-key"> Humidity :
          <span className="value"> {props.humidity}</span>
           </p>


      }
      {
        props.description &&               <p className="info-key"> Description :
          <span className="value"> {props.description}</span>
           </p>


      }
       {
        props.error &&               <p className="info-key"> Error :
          <span className="value"> {props.error}</span>
           </p>


      }
      

        

        


       
      
    </div>
  );

}

export default Weather;