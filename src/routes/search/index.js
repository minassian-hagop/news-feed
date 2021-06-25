import { connect } from 'react-redux';
import Search from './Search';

import { newsOperations } from '../../store/modules/news';

const mapStateToProps = (store) => ({
    sources: store.news.sources,
    search_filter: store.news.search_filter,
    country_filter: store.news.country_filter,
    category_filter: store.news.category_filter,
    sources_filter: store.news.sources_filter,
});

const mapDispatchToProps = {
    setSearchFilter: newsOperations.setSearchFilter,
    setCategoryFilter: newsOperations.setCategoryFilter,
    setCountryFilter: newsOperations.setCountryFilter,
    setSourcesFilter: newsOperations.setSourcesFilter,
    clearFilters: newsOperations.clearFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
