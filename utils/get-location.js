import React, { useState, useEffect, useCallback } from 'react';
import Geolocation from '@react-native-community/geolocation';

const getLocation = () => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(`Position: ${position}`);
        setCoordinates([position.coords.latitude, position.coords.longitude])
      },
      (error) => {
        console.log(error.code, error.message);
      }
    );
  }, []);

  return coordinates;
};

export default getLocation;