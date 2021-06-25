import axios from 'axios';
import {
    clearFilters,
    setSources,
    setCategoryFilter,
    setCountryFilter,
    setSearchFilter,
    setSourcesFilter
} from './actions';
import * as URLS from '../../../constants/api.js';

const fetchSources = () => dispatch => {
    axios.get(URLS.SOURCES)
        .then(res => {
            if (res.status === 200 && res.data.status === 'ok') {
                dispatch(setSources(res.data.sources));
            }
        })
        .catch(err => {
            console.error(err)
        })
}

export {
    clearFilters,
    setCategoryFilter,
    setCountryFilter,
    setSearchFilter,
    setSourcesFilter,
    fetchSources,
    setSources,
}
