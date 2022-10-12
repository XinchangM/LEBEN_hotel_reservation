import React from 'react';
import useFetch from "../hooks/useFetch";
import "../style/newRelease.css";

export default function NewRelease() {
    const { data, loading, error } = useFetch(
        `${process.env.REACT_APP_API_URL}/api/hotels/new`
      );
    return (
      <div className="new">
        {loading ? (
          "Loading please wait"
        ) : (
          <>
        {data.slice(0,3).map( (hotel) => (
          <div className="newItem" key = {hotel.id}>
              <img src={hotel.img}
                alt=""
                className="newImg"/>
            <div className= "newTitles">
              <span className="newName">{hotel.name}</span>
              <span className="newPrice"> Starting from ${hotel.Price}</span>
            </div>
        </div>))}
        </>
        )}
      </div>
    );
}
