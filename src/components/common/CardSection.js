// Import Libraries
import React from 'react'
import {View} from 'react-native'

const CardSection = (props) => {
    var style = props.style ? props.style : styles.containerStyle;
    return(
        <View style={style}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
    }
}

export { CardSection };
