import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator} from 'react-navigation';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NavigationService from '../NavigationService';
import {LifetimeDetails, CurrentDetails, PriorDetails} from './PlayerDetails';


export default createBottomTabNavigator({
    Lifetime: {
        screen: LifetimeDetails,
        navigationOptions: {
            tabBarLabel: 'Lifetime',
            tabBarIcon: ({tintColor}) => <Ionicons name="md-infinite" size={35} color={tintColor} />
        }
    },
    CurrentSeason: {
        screen: CurrentDetails,
        navigationOptions: {
            tabBarLabel: 'Season 5',
            tabBarIcon: ({tintColor}) => <Ionicons name="logo-html5" size={35} color={tintColor} />
        }
    },
    PriorSeason: {
        screen: PriorDetails,
        navigationOptions: {
            tabBarLabel: 'Season 4',
            tabBarIcon: ({tintColor}) => <Ionicons name="md-analytics" size={35} color={tintColor} />
        }
    }
});
