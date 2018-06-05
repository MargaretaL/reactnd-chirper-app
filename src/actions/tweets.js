/**
 * Created by lilit on 2018-06-05.
 */

//the below is going to be the action type when we receive and dispatch all of our tweets to update our store.

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}


