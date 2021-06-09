import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {theme, LOCATION} from '../utils/constants';
import {refresh} from '../assets/index';

const Header = ({reload}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.city}>{LOCATION.name}</Text>
      </View>
      <TouchableOpacity style={{margin: 10}} onPress={() => reload()}>
        <Image source={refresh} style={{width: 25, height: 25}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '6%',
    width: '100%',
    backgroundColor: theme.header,
    justifyContent: 'space-between',
  },
  city: {
    color: theme.fontColor,
    fontSize: 25,
    textTransform: 'uppercase',
    margin: 5,
    marginLeft: 15,
    fontFamily: 'Roboto',
  },
});
export default Header;
