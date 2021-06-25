import * as types from './types';
import { createReducer } from '../../utils';

const initialState = {};

const newsReducer = createReducer(initialState)({
    [types.CLEAR_FILTERS]: (state, action) => {
        return {};
    },
});

export default newsReducer;
