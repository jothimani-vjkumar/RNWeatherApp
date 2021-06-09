import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../components/Header';
import TodayForecast from '../components/TodayForecast';
import FutureForecast from '../components/FutureForecast';
import {fetchWeatherReport} from '../redux/weather/WeatherActions';
import store from '../redux/store';
import {theme} from '../utils/constants';

const Weather = ({data, loading, error, fetchWeather}) => {
  useEffect(() => {
    let ac = new AbortController();
    fetchWeather();
    return () => {
      ac.abort();
    };
  }, []);

  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator color="#fff" size="large" />
    </View>
  ) : error ? (
    <View style={styles.container}>
      <Text style={styles.errormsg}>Network Error...</Text>
      <TouchableOpacity onPress={() => fetchWeather()} style={styles.btn}>
        <Text style={styles.btntxt}>Reload</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{flex: 1, backgroundColor: '#b2b2b2'}}>
      <Header reload={fetchWeather} />
      {data?.current && <TodayForecast current={data.current} />}
      {data?.daily && <FutureForecast daily={data.daily} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color,
  },
  errormsg: {
    fontSize: 20,
    color: '#fff',
  },
  btn: {
    width: 150,
    height: 50,
    marginVertical: 20,
    backgroundColor: '#5B2C6F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  btntxt: {fontSize: 18, fontWeight: 'bold', color: '#fff'},
});

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchWeather: () => dispatch(fetchWeatherReport()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
