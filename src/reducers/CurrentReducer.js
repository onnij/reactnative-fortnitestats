import { FIND_USER_SUCCESS, CURRENT_SET_PLAYLIST } from '../actions/types'
import NavigationService from '../NavigationService';

const INITIAL_STATE = { reducer: 'Current Season',
                        selectedPlaylist: 'solo',
                         soloStats: null,
                         duoStats: null,
                         squadStats: null,
                         lifetimeStats: null };

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FIND_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, 
                            lifetimeStats: action.payload.lifeTimeStats, 
                                soloStats: action.payload.stats.curr_p2,
                                 duoStats: action.payload.stats.curr_p10,
                               squadStats: action.payload.stats.curr_p9};
        case CURRENT_SET_PLAYLIST:
            return {...state, selectedPlaylist: action.payload};
        default:
            return state;
    }
}