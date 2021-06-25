import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { newsOperations } from './store/modules/news/index'

import './App.scss';

import HeaderNavBar from './components/HeaderNavBar';

import Home from './routes/home';
import Search from './routes/search';
import NotFound from './routes/not-found';

const App = ({ fetchSources }) => {
  useEffect(() => {
    fetchSources();
  }, []);

  return (
    <Router>
      <div className="page-layout">
        <HeaderNavBar />
        <div className="page-layout__page">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/search" component={Search}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const mapDispatchToProps = {
  fetchSources: newsOperations.fetchSources
}

export default connect(null, mapDispatchToProps)(App);
