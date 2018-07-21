import {USERNAME_CHANGED, PLATFORM_CHANGED, FIND_USER, FIND_USER_SUCCESS, FIND_USER_FAILURE} from '../actions/types'
import NavigationService from '../NavigationService';

const INITIAL_STATE = { username: '',
                        platform: '',
                    isLoading: false, 
                        error: '', 
                         user: null };

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case USERNAME_CHANGED:
            return {...state, username: action.payload};
        case PLATFORM_CHANGED:
            return {...state, platform: action.payload};
        case FIND_USER:
            return {...state, isLoading: true, error: ''};
        case FIND_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
        case FIND_USER_FAILURE:
            return {...state, isLoading: false, error: action.payload};
        default:
            return state;
    }
}