import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Component,
} from 'react-native';
import ChangeColor from './ChangeColor';
import { Provider, connect, } from 'react-redux'

class Controller extends React.Component {

  onIncrease = () => {
    this.props.dispatch({ type: 'UP' });
  }

  onDecrease = () => {
    this.props.dispatch({ type: 'DOWN' });
  }

  render() {
    return (
      <View style={styles.container}>

        <Button
          style={ styles.button }
          onPress={this.onIncrease}
          title="Increase"
        />

        <Button
          style={ styles.button }
          onPress={this.onDecrease}
          title="Decrease"
        />

        <ChangeColor />

      </View>
    )
  }
}

function mapStateToProps(state) {
  return { myValue: state.value };
}

export default connect(mapStateToProps)(Controller);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    height: 40,
  },
});