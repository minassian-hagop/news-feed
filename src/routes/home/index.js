import { connect } from 'react-redux';
import Home from './Home';

import { newsOperations } from '../../store/modules/news';

const mapStateToProps = (store) => ({
    sources: store.news.sources,
});

const mapDispatchToProps = {
    setSourcesFilter: newsOperations.setSourcesFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
