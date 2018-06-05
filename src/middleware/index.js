/**
 * Created by lilit on 2018-06-05.
 */
import logger from './logger';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

export default applyMiddleware(
    thunk,
    logger
)
