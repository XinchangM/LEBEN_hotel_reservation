import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthToken } from "../context/AuthTokenContext";

export default function getReservation() {
  const [reserve, setReserve] = useState([]);
  const { accessToken } = useAuthToken();

  useEffect(() => {
    async function getReserved() {
        const data = await fetch(`${process.env.REACT_APP_API_URL}/api/reservations/user`, 
        { headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
          const reservation = await data.json();
          console.log(reservation);
          setReserve(reservation);
          console.log(reservation);
          console.log(reserve);
  } }, [accessToken]);

  return {reserve};
}
