import {USERNAME_CHANGED, PLATFORM_CHANGED, FIND_USER, FIND_USER_SUCCESS, FIND_USER_FAILURE, LIFETIME_SET_PLAYLIST, CURRENT_SET_PLAYLIST, PRIOR_SET_PLAYLIST} from './types';
import NavigationService from '../NavigationService';

export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    }
}

export const platformChanged = (text) => {
    return {
        type: PLATFORM_CHANGED,
        payload: text
    }
}

export const findUser = ({platform, username}) => {
    return (dispatch) => {
        dispatch({type: FIND_USER});
        const url = 'https://api.fortnitetracker.com/v1/profile/'+ platform + '/' + username;
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {
                'TRN-Api-Key': '475bb0cb-8bda-43fe-912f-d63b6d3a7e1a'
            }
        }).then((response) => {
            console.log(response);
            return response.json()})
        .then((userData) => {
            console.log(userData);
            if(!userData.error){
                findUserSuccess(dispatch, userData);
            } else {
                findUserFailure(dispatch, userData.error);
            }
        })
        .catch(error => {
            console.log(error);
            findUserFailure(dispatch, 'Could not find user.');
        });
    }
}

const findUserSuccess = (dispatch, user) =>{
    dispatch({type: FIND_USER_SUCCESS, payload: user});
}

const findUserFailure = (dispatch, message) =>{
    NavigationService.navigate('Search');
    dispatch({type: FIND_USER_FAILURE, payload: message });
}

export const selectPlaylist = (playlist, reducer) => { 
    var type = LIFETIME_SET_PLAYLIST;
    if(reducer === 'Current Season'){ type = CURRENT_SET_PLAYLIST; }
    if(reducer === 'Prior Season'){ type = PRIOR_SET_PLAYLIST; }
    return {
        type: type,
        payload: playlist
    }
}