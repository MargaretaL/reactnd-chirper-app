/**
 * Created by lilit on 2018-06-05.
 */
import {getInitialData} from '../utils/api';
import {receiveUsers} from './users';
import {receiveTweets} from './tweets';
import {setAuthedUser} from './authedUser';

const AUTHED_ID = 'tylermcginnis';

//the below hID func uses the redux-thunk pattern because we are making an asynchronous request.

// /you call getInitialData which then will return us a promise.Which will pass to us an object which has a users and a tweets property.
//then you want to take our users and tweets and add them to the state of our redux store.
//to do that we need to dispatch a few actions
//go to tweets.js

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(receiveUsers(users),
                dispatch(receiveTweets(tweets)),
                    dispatch(setAuthedUser(AUTHED_ID))
                )

            })
    }
}