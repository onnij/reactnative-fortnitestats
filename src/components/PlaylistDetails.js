import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {CardSection} from './common';

export default class PlaylistDetails extends Component<Props>{
    constructor(props){
        super(props);
        console.log(this.props.stats);
    }
    render(){
        const {matches, kills, kd,  winRatio, top1, top10, trnRating } = this.props.stats;
        return (
            <CardSection style={styles.containerStyle}>
                    <View style={styles.statContainerStyle}>
                        <Text style={styles.labelTextStyle}>Tracker Rating</Text>
                        <Text style={styles.valueTextStyle}>{trnRating.displayValue}</Text>
                    </View>
                    <View style={styles.statContainerStyle}>
                        <Text style={styles.labelTextStyle}>Matches</Text>
                        <Text style={styles.valueTextStyle}>{matches.displayValue}</Text>
                    </View>
                    <View style={styles.statContainerStyle}>
                        <Text style={styles.labelTextStyle}>Wins</Text>
                        <Text style={styles.valueTextStyle}>{top1.displayValue}</Text>
                    </View>
                    <View style={styles.statContainerStyle}>
                        <Text style={styles.labelTextStyle}>Win %</Text>
                        <Text style={styles.valueTextStyle}>{winRatio.displayValue}</Text>
                    </View>
                    <View style={styles.statContainerStyle}>
                        <Text style={styles.labelTextStyle}>Top 10s</Text>
                        <Text style={styles.valueTextStyle}>{top10.displayValue}</Text>
                    </View>
                    <View style={styles.statContainerStyle}>
                        <Text style={styles.labelTextStyle}>Kills</Text>
                        <Text style={styles.valueTextStyle}>{kills.displayValue}</Text>
                    </View>
                    <View style={styles.statContainerStyle}>
                        <Text style={styles.labelTextStyle}>K/D</Text>
                        <Text style={styles.valueTextStyle}>{kd.displayValue}</Text>
                    </View>
            </CardSection>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white'
    },
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        height:325
    },
    statContainerStyle: {flex:1, flexDirection: 'row', height: 40, width: '100%', alignItems: 'center'},
    labelTextStyle: {flex: 1, fontSize:14, color:'#999', textAlign: 'right'},
    valueTextStyle: {flex: 2, fontSize:20, color:'#000', fontWeight:'bold', textAlign: 'center'}

}