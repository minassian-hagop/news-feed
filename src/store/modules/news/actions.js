import * as types from './types';

export const clearFilters = () => ({
    type: types.CLEAR_FILTERS,
});

export const setSearchFilter = (text) => ({
    type: types.SET_SEARCH_FILTER,
    payload: text,
});

export const setCountryFilter = (country) => ({
    type: types.SET_COUNTRY_FILTER,
    payload: country,
});

export const setCategoryFilter = (category) => ({
    type: types.SET_CATEGORY_FILTER,
    payload: category,
});

export const setSourcesFilter = (sources) => ({
    type: types.SET_SOURCES_FILTER,
    payload: sources,
});

export const setSources = (sources) => ({
    type: types.SET_SOURCES,
    payload: sources,
});
