import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../utils/constants';

const TodayForecast = () => {
  return (
    <View style={styles.container}>
      <View style={styles.todayresult}>
        <View>
          <Text style={styles.day}>Monday</Text>
          <Text style={styles.temp}>25 C</Text>
        </View>
        <View>
          <Text>Icon</Text>
        </View>
      </View>
      <View style={styles.daterow}>
        <Text style={styles.date}>22 May 2021</Text>
        <Text style={styles.summary}>Cloudy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '25%',
    width: '100%',
    backgroundColor: theme.color,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  todayresult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 15,
  },
  daterow: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#fff',
    width: '90%',
    height: 40,
    bottom: 20,
    marginHorizontal: 20,
  },
  day: {
    color: theme.fontColor,
    fontSize: 30,
    textTransform: 'uppercase',
    fontFamily: 'monaco',
    fontWeight: '400',
  },
  temp: {
    color: theme.fontColor,
    fontSize: 50,
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    fontWeight: '700',
  },
  date: {
    color: theme.fontColor,
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  summary: {
    color: theme.fontColor,
    fontSize: 20,
    marginHorizontal: 30,
    marginVertical: 5,
    fontWeight: 'bold',
  },
});
export default TodayForecast;
