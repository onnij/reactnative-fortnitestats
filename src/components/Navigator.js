import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginForm from './LoginForm';
import PlayerInfo from './PlayerInfo';
import NavigationService from '../NavigationService';

export const Navigator = new StackNavigator({
    Search: {screen: LoginForm},
    PlayerInfo: {screen: PlayerInfo,
        navigationOptions: ({ navigation }) => {
            var handle = navigation.state.params.epicUserHandle;

            return { title: handle };
        }
    }
}, {
    initialRouteName: 'Search'
});

class Nav extends Component<Props> {
    render() {
        return (
            <Navigator ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}/>
        );
    }
}

export default Nav;
