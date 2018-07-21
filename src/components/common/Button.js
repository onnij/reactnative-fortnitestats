import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ( {onPress, children, containerStyle = styles.touchableOpacityStyle, textStyle = styles.buttonTextStyle} ) => {
    return (
        <TouchableOpacity style={containerStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    touchableOpacityStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10
    }
}

export { Button };
