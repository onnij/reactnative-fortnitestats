import { FIND_USER_SUCCESS, LIFETIME_SET_PLAYLIST } from '../actions/types'
import NavigationService from '../NavigationService';

const INITIAL_STATE = { reducer: 'Lifetime',
                        selectedPlaylist: 'solo',
                         soloStats: null,
                         duoStats: null,
                         squadStats: null,
                         lifetimeStats: null };

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FIND_USER_SUCCESS:
            NavigationService.setParams({epicUserHandle: action.payload.epicUserHandle}, 'PlayerInfo');
            return {...state, ...INITIAL_STATE, 
                            lifetimeStats: action.payload.lifeTimeStats, 
                                soloStats: action.payload.stats.p2,
                                 duoStats: action.payload.stats.p10,
                               squadStats: action.payload.stats.p9};
        case LIFETIME_SET_PLAYLIST:
            return {...state, selectedPlaylist: action.payload};
        default:
            return state;
    }
}