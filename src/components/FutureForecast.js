import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {theme} from '../utils/constants';
import moment from 'moment';

const ForecastCard = ({item}) => (
  <View style={styles.card}>
    <Text style={styles.day}>{item.day}</Text>
    <Text style={styles.temp}>{item.temp}&#176;C </Text>
    <View style={styles.icon}>
      <Image source={{uri: item.icon}} style={{width: 70, height: 65}} />
    </View>
  </View>
);

const TodayForecast = ({daily}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ac = new AbortController();

    const formattedData = daily
      .map(item => ({
        day: moment(+item.dt * 1000).format('dddd'),
        icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        temp: Math.round(item.temp.day),
      }))
      .filter((item, index) => index !== 0 && index !== daily.length - 1);

    setData(formattedData);

    return () => {
      ac.abort();
    };
  }, [daily]);

  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(_, i) => i.toString()}
      renderItem={ForecastCard}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 4,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 82,
    borderRadius: 10,
    backgroundColor: theme.color,
    marginVertical: 2,
    marginHorizontal: 3,
  },

  day: {
    color: theme.fontColor,
    fontSize: 25,
    alignSelf: 'center',
    marginLeft: 25,
    textTransform: 'uppercase',
    width: '40%',
  },
  temp: {
    color: theme.fontColor,
    fontSize: 25,
    alignSelf: 'center',
    marginLeft: 20,
    textTransform: 'uppercase',
    width: '20%',
  },
  icon: {
    width: '20%',
    alignSelf: 'center',
    marginRight: 10,
  },
});
export default TodayForecast;
