
  const apiUrl =
  "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCAUphBTKR28ZDZjYGys_NXANgx4uw5tPo";


  const getLatLng = (city) => {
    fetch(`${apiUrl}&address=${city}`)
      .then((res) => res.json())
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatLng({ lat, lng });
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    getLatLng(city);
  }

  return ;
