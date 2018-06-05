/**
 * Created by lilit on 2018-06-05.
 */
import {SET_AUTHED_USER} from '../actions/authedUser';

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER :
            return action.id;
        default :
            return state
    }

};