/**
 * Created by lilit on 2018-06-05.
 */
//then import users and tweets at shared.js
export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }

}