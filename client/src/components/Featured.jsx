import React from "react";
import useFetch from "../hooks/useFetch";
import "../style/featured.css";

const Featured = () => {
    const { data, loading, error } = useFetch(
      `${process.env.REACT_APP_API_URL}/api/hotels/featured`
    );

    return (
      <div className="featured">
        {loading ? (
          "Loading please wait"
        ) : (
          <>
        {data.slice(0,5).map( (hotel) => (
          <div className="featuredItem" key = {hotel.id}>
            <img src={hotel.img}
              alt=""
              className="featuredImg"/>
            <div className= "featuredTitles">
              <h2>{hotel.name}</h2>  
              <h3>{hotel.city}</h3>   
            </div>
          </div>

        ))}
          </>
        )}
      </div>
    );
  };
  
export default Featured;
