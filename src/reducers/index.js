
import { combineReducers } from 'redux';

import BookReducer from './bookReducers';

export const rootReducer = combineReducers({ BookReducer });

export default{rootReducer};