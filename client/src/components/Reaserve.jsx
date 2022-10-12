import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "../style/reserve.css";
import { SearchContext } from "../context/SearchContext";
import {  useNavigate } from "react-router-dom";
import { useContext} from "react";
import { useAuthToken } from "../context/AuthTokenContext";
import useFetch from "../hooks/useFetch";
import getUser from "../hooks/useAuth";

const Reserve = ({ setOpen, hotelId }) => {
    const navigate = useNavigate();
    const { data, loading, error } = useFetch(`${process.env.REACT_APP_API_URL}/api/hotels/find/${hotelId}`);
    const { dates } = useContext(SearchContext);
    const { accessToken } = useAuthToken();

    const { userData } = getUser();
    
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        const dates = [];
        while (date <= end) {
        dates.push(new Date(date).getTime());
        date.setDate(date.getDate() + 1);
        }
        return dates;
    };
    const start = dates[0].startDate.toISOString();
    const end =  dates[0].endDate.toISOString();

  const handleClick = async () => {
    try{
      const respose = fetch(`${process.env.REACT_APP_API_URL}/api/reservations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            dateIn: start,
            dateOut: end,
          }),
        })
        if(respose){
          window.alert("Reservation Creates")
          setOpen(false);
        }
  
    } catch(error) {};
  };


  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Confirm reservation:</span>
          <div className="rItem" key={data.id}>
            <div className="rItemInfo">
            <div className="rName">Hotel Name</div>
              <div className="rName">{data.name}</div>
              <div className="rPrice"> Total price</div>
              <div className="rPrice">{data.Price}</div>
            </div>
          </div>

        <button onClick={handleClick} className="rButton">
          Reserve
        </button>
      </div>
    </div>
  );
};

export default Reserve;