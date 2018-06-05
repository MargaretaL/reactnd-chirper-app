/**
 * Created by lilit on 2018-06-05.
 */


export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}