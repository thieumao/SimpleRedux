import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider, connect, } from 'react-redux';

class ChangeColor extends React.Component {

    onChangeColor = () => {
        this.props.dispatch({ type: 'CHANGE_COLOR' });
    }

    render() {
        const color = this.props.highlight ? 'green' : 'red'
        return (

            <Button
                color={color}
                onPress={this.onChangeColor}
                title="Change Color"
            />
        );
    }

}

function mapStateToProps(state) {
    return { highlight: state.highlight };
}

export default connect(mapStateToProps)(ChangeColor);

const styles = StyleSheet.create({
    button: {
        height: 40,
    },
});