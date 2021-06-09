import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../utils/constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.city}>Chennai</Text>
      </View>
      <View>
        <Text>End</Text>
      </View>
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
    fontFamily: 'monospace',
  },
});
export default Header;
