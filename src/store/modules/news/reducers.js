import * as types from './types';
import { createReducer } from '../../utils';

const initialState = {
    sources: [],
    search_filter: '',
    country_filter: '',
    category_filter: '',
    sources_filter: []
};

const newsReducer = createReducer(initialState)({
    [types.CLEAR_FILTERS]: (state, action) => {
        return {
            sources: state.sources,
            search_filter: '',
            country_filter: '',
            category_filter: '',
            sources_filter: []
        };
    },
    [types.SET_SEARCH_FILTER]: (state, action) => {
        return {
            ...state,
            search_filter: action.payload
        };
    },
    [types.SET_CATEGORY_FILTER]: (state, action) => {
        return {
            ...state,
            category_filter: action.payload
        };
    },
    [types.SET_COUNTRY_FILTER]: (state, action) => {
        return {
            ...state,
            country_filter: action.payload
        };
    },
    [types.SET_SOURCES_FILTER]: (state, action) => {
        return {
            ...state,
            sources_filter: action.payload
        };
    },
    [types.SET_SOURCES]: (state, action) => {
        return {
            ...state,
            sources: action.payload,
        };
    },
});

export default newsReducer;
