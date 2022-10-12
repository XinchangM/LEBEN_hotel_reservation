import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "../style/searchList.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect} from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/SearchItem";
import useFetch from "../hooks/useFetch";



const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  
  const { data, loading, error, reFetch } = useFetch(
    `${process.env.REACT_APP_API_URL}/api/hotels/getByCity?city=${destination}`
  );

  const [geo, setGeo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCAUphBTKR28ZDZjYGys_NXANgx4uw5tPo
        &address=${destination}`);
        const { lat, lng } = res.data.results[0].geometry.location;
        setGeo({lat, lng});
      } catch (err) { }
    };
    fetchData();
  }, [destination]);
    console.log(geo)
    const containerStyle = {
      width: '800px',
      height: '400px'
    };
    const center = {
      lat: parseFloat(geo.lat),
      lng: parseFloat(geo.lng)

    }

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" required />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>

          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item.id} />
                ))}
              </>
            )}
            <div className="map">
              <LoadScript
                  googleMapsApiKey="AIzaSyBk6loKs6lUS_LPB_PdhAJPStwnBsFZGDU">
                  <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={15}
                      >
                  </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;