import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {theme} from '../utils/constants';

const ForecastCard = ({item}) => (
  <View style={styles.card}>
    <Text style={styles.day}>Monday{item}</Text>
    <Text style={styles.day}>18 C </Text>
    <Text style={styles.day}> Icon </Text>
  </View>
);
const data = [0, 1, 2, 3, 4, 5];

const TodayForecast = () => {
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
    marginLeft: 20,
    textTransform: 'uppercase',
  },
});
export default TodayForecast;
