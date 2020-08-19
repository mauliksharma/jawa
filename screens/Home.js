import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getLocation from '../utils/get-location';

const Home = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const URL = 'http://api.openweathermap.org/data/2.5/weather?q=delhi,in&appid=2679115de849ac01b004ee085233073e';

  const coordinates = getLocation()
  console.log(coordinates)

  const fetchWeatherData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(URL);
    if (response.ok) {
      const weatherData = await response.json();
      setWeatherData(weatherData);
      console.log(weatherData)
      setIsLoading(false)
    }
  }, []);

  useEffect(() => {
    // fetchWeatherData();
  }, []);

  // const refreshWeatherData = useCallback(async () => {
  //   setIsLoading(true);
  //   await fetchWeatherData();
  //   setIsLoading(false);
  // });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Fetching Weather Data</Text>
      ) : (
         <Text>Fetched Weather Data!</Text>
        )}
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
