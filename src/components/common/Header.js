// Import Libraries for making a component
import React, {Component}  from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Make a component and make it available to the rest of the app.
const Header = ({ headerText }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
    );
}

//Add styling to Component
const styles = {
    textStyle: {
        fontSize: 20

    },
    viewStyle: {
        backgroundColor: '#DDDDDD',
        width: '100%',
        height: 55,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { 
            width: 0,
            height: 2
        },
        shadowOpacity: 0.6,
        elevation: 2,
        position: 'relative'
    }
};

export { Header };