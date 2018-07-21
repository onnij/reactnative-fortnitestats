import React from 'react';
import {TextInput, Text, View} from 'react-native';

const Input = ( {label, value, placeholder, secureTextEntry, onChangeText }) => {
    const {containerStyle, labelStyle, inputStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput style={inputStyle}
                       secureTextEntry={secureTextEntry}
                       autoCorrect={false} 
                       placeholder={placeholder}
                       value={value}
                       onChangeText={onChangeText}></TextInput>
        </View>
    );
}

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingRight: 20,
        color: '#555',
        flex: 1,
        textAlign: 'right'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
};

export { Input };