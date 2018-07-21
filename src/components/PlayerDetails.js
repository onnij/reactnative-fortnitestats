import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator} from 'react-navigation';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NavigationService from '../NavigationService';
import { Card, CardSection, Button, Spinner } from './common'; 
import PlaylistDetails from './PlaylistDetails';
import { findUser, selectPlaylist } from '../actions';

class PlayerDetails extends Component<Props> {
    componentDidMount(){
        if(this.props.reducer === 'Lifetime'){
            const {username, platform} = this.props;
            this.props.findUser({platform, username});
        }
    }
    setPlaylist(playlist){
        this.props.selectPlaylist(playlist, this.props.reducer);
    }
    renderButtons(){
        const {defaultContainerStyle, defaultTextStyle } = styles; 
        const     soloColor = '#17c2fe';
        const      duoColor = '#41b057';
        const    squadColor = '#c272d9'; 

        var soloContainerStyle = {...defaultContainerStyle};
        var duoContainerStyle = {...defaultContainerStyle};
        var squadContainerStyle = {...defaultContainerStyle};
        var soloTextStyle = {...defaultTextStyle}; 
        var duoTextStyle = {...defaultTextStyle}; 
        var squadTextStyle = {...defaultTextStyle};

        switch(this.props.selectedPlaylist){
            case 'solo':
                soloContainerStyle.backgroundColor = soloColor;
                soloContainerStyle.borderColor = soloColor;
                soloTextStyle.color = 'white';
                break;
            case 'duo':
                duoContainerStyle.backgroundColor = duoColor;
                duoContainerStyle.borderColor = duoColor;
                duoTextStyle.color = 'white';
                break;
            case 'squad':
                squadContainerStyle.backgroundColor = squadColor;
                squadContainerStyle.borderColor = squadColor;
                squadTextStyle.color = 'white';
                break;

        }
        return (
            <CardSection>
                <Button containerStyle={soloContainerStyle} textStyle={soloTextStyle} onPress={this.setPlaylist.bind(this, "solo")}><Ionicons name="ios-contact" size={16} color={soloTextStyle.color} /> Solos</Button>
                <Button containerStyle={duoContainerStyle} textStyle={duoTextStyle} onPress={this.setPlaylist.bind(this, "duo")}><Ionicons name="ios-contacts" size={16} color={duoTextStyle.color} /> Duos</Button>
                <Button containerStyle={squadContainerStyle} textStyle={squadTextStyle} onPress={this.setPlaylist.bind(this, "squad")}><Ionicons name="ios-contract" size={16} color={squadTextStyle.color} /> Squads</Button>
            </CardSection>
        );
    }
    renderLifetimeStats(){
        const { lifetimeStats } = this.props;
        console.log(this.props);
        if(!Array.isArray(lifetimeStats)){
            return <CardSection/>;
        }
        const stats = lifetimeStats.reduce((map, obj) => {
            map[obj.key] = obj.value;
            return map;
        }, {});
        console.log(stats);
        return (
            <CardSection>
                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', height: 60, width: '100%'}}>
                    <Text style={styles.labelTextStyle}>Matches</Text>
                    <Text style={styles.valueTextStyle}>{stats['Matches Played']}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', height: 60, width: '100%'}}>
                    <Text style={styles.labelTextStyle}>Wins</Text>
                    <Text style={styles.valueTextStyle}>{stats['Wins']}</Text>
                </View>
                 <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', height: 60, width: '100%'}}>
                    <Text style={styles.labelTextStyle}>Win %</Text>
                    <Text style={styles.valueTextStyle}>{stats['Win%']}</Text>
                </View>
                 <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', height: 60, width: '100%'}}>
                    <Text style={styles.labelTextStyle}>Kills</Text>
                    <Text style={styles.valueTextStyle}>{stats['Kills']}</Text>
                </View>
                 <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', height: 60, width: '100%'}}>
                    <Text style={styles.labelTextStyle}>K/D</Text>
                    <Text style={styles.valueTextStyle}>{stats['K/d']}</Text>
                </View>
            </CardSection>
        );
    }
    renderPlaylistDetails(){
        var stats = this.statsForPlaylist();
        console.log(stats);
        if(stats !== null){
            return <PlaylistDetails stats={stats}/>;
        } else {
            return <View/>;
        }
    }
    statsForPlaylist(){
        switch(this.props.selectedPlaylist){
            case 'solo':
                return this.props.soloStats;
            case 'duo':
                return this.props.duoStats;
            case 'squad':
                return this.props.squadStats;
        }
        return null;
    }
    render() {
        if(this.props.isLoading){
            return (
                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}><Spinner/></View>
            );
        }
        return (
            <View>
                <Card>
                    <CardSection>
                        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center', height: 20, width: '100%'}}>
                            <Text style={{flex: 1, textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Overall Stats</Text>
                        </View>
                    </CardSection>
                    {this.renderLifetimeStats()}
                </Card>
                <Card>
                    <CardSection><Text style={{textAlign: 'center', flex:1, fontSize: 16, fontWeight: 'bold'}}>{this.props.reducer} Playlists</Text></CardSection>
                    {this.renderButtons()}
                    <CardSection/>
                    {this.renderPlaylistDetails()}
                </Card>
            </View>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white'
    },
    defaultContainerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    defaultTextStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10
    },
    labelTextStyle: {flex: 1, fontSize:12, color:'#999', textAlign: 'center'},
    valueTextStyle: {flex: 2, fontSize:20, color:'#000', fontWeight:'bold', textAlign: 'center'}

}

const mapLifetimeStateToProps = state => {
    const {reducer, selectedPlaylist, soloStats, duoStats, squadStats, lifetimeStats} = state.lifetime;
    const {username, platform, isLoading} = state.auth;
    return {reducer, selectedPlaylist, soloStats, duoStats, squadStats, lifetimeStats, username, platform, isLoading};
};

const mapCurrentStateToProps = state => {
    const {reducer, selectedPlaylist, soloStats, duoStats, squadStats, lifetimeStats} = state.current;
    const {username, platform, isLoading} = state.auth;
    return {reducer, selectedPlaylist, soloStats, duoStats, squadStats, lifetimeStats, username, platform, isLoading};
};

const mapPriorStateToProps = state => {
    const {reducer, selectedPlaylist, soloStats, duoStats, squadStats, lifetimeStats} = state.prior;
    const {username, platform, isLoading} = state.auth;
    return {reducer, selectedPlaylist, soloStats, duoStats, squadStats, lifetimeStats, username, platform, isLoading};
};

export const LifetimeDetails =  connect(mapLifetimeStateToProps, {findUser, selectPlaylist})(PlayerDetails);
export const CurrentDetails =  connect(mapCurrentStateToProps, {selectPlaylist})(PlayerDetails);
export const PriorDetails =  connect(mapPriorStateToProps, {selectPlaylist})(PlayerDetails);