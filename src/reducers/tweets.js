/**
 * Created by lilit on 2018-06-05.
 */

import {RECEIVE_TWEETS} from '../actions/tweets';

export default function users (state= {}, action ) {
    switch (action.type) {
        case RECEIVE_TWEETS :
            return {
                ...state, //empty object to begin with
                ...action.tweets// all tweets grabbed from the action
            };
        default : //if cases dont match
            return state
    }
}