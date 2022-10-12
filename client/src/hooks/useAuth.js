import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthToken } from "../context/AuthTokenContext";

export default function getUser() {
  const [user, setUser] = useState([]);
  const { accessToken } = useAuthToken();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function verifyUser() {
      setLoading(true);
      try {
        const data = await fetch(`${process.env.REACT_APP_API_URL}/api/users/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
          const userData = await data.json();
          setUser(userData);
        } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    if (accessToken) {
      verifyUser();
    }
  }, [accessToken]);


  return {user, loading, error};
}
