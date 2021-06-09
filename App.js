/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Weather from './src/screen/Weather';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Weather />
    </SafeAreaView>
  );
};

export default App;
