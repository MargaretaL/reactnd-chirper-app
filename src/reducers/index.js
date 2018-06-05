/**
 * Created by lilit on 2018-06-05.
 */
import {combineReducers} from 'redux';
import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';

export default combineReducers ({
    authedUser,
    users,
    tweets
})