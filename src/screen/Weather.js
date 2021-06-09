import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import TodayForecast from '../components/TodayForecast';
import FutureForecast from '../components/FutureForecast';

const Weather = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#b2b2b2'}}>
      <Header />
      <TodayForecast />
      <FutureForecast />
    </View>
  );
};

export default Weather;
