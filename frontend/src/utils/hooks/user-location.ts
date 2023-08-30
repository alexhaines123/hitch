import { useState, useEffect } from 'react';

const UserLocation = () => {
  const [userLocation, setUserLocation] = useState<GeolocationPosition>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setUserLocation);
    }
  }, []);

  return userLocation;
}

export default UserLocation