import { connect } from 'react-redux';
import HeaderNavBar from './HeaderNavBar';

import { newsOperations } from '../../store/modules/news';


const mapStateToProps = (store) => ({
    search_filter: store.news.search_filter,
});

const mapDispatchToProps = {
    setSearchFilter: newsOperations.setSearchFilter,
    clearFilters: newsOperations.clearFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavBar);
