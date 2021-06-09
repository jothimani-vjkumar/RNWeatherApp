import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {theme} from '../utils/constants';
import moment from 'moment';

const TodayForecast = ({current}) => {
  const [report, setReport] = useState({});

  useEffect(() => {
    let ac = new AbortController();
    const data = {
      day: moment().utc(current.dt).format('dddd'),
      date: moment(+current.dt * 1000).format('DD MMM YYYY'),
      icon: `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
      temp: Math.round(current.temp),
      summary: current.weather[0].main,
    };
    setReport(data);
    return () => {
      ac.abort();
    };
  }, [current]);

  return (
    <View style={styles.container}>
      <View style={styles.todayresult}>
        <View>
          <Text style={styles.day}>{report.day}</Text>
          <Text style={styles.temp}>{report.temp}&#176;C</Text>
        </View>
        <Image source={{uri: report.icon}} style={{width: 150, height: 120}} />
      </View>
      <View style={styles.daterow}>
        <Text style={styles.date}>{report.date}</Text>
        <Text style={styles.summary}>{report.summary}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '25%',
    backgroundColor: theme.color,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 2,
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
  icon: {
    width: 150,
    height: 120,
    marginRight: 20,
  },
});
export default TodayForecast;
