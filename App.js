/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Component,
} from 'react-native';
import Controller from './Controller';
import { Provider, connect, } from 'react-redux';

class App extends React.Component {

  onIncrease = () => {
    this.props.dispatch({ type: 'UP' });
  }

  onDecrease = () => {
    this.props.dispatch({ type: 'DOWN' });
  }

  render() {
    const color = this.props.myHighlight ? "red" : "black"
    return (
      <View style={styles.container}>

        <Text style={{ fontSize: 40, color }}> {this.props.myValue} </Text>

        <Controller />

      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    myValue: state.value,
    myHighlight: state.highlight
  };
}

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'red',
    height: 40,
  },
  button: {
    height: 40,
  },
});