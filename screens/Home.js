import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getLocation from '../utils/getLocation';
import getWeather from '../utils/getWeather';

const Home = ({ navigation }) => {

  const weatherData = getWeather();

  return (
    <View style={styles.container}>
      {!weatherData ? (
        <Text>Fetching Weather Data...</Text>
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
