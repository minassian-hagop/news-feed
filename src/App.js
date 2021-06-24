import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import HeaderNavBar from './components/HeaderNavBar';

import Home from './routes/home';
import Search from './routes/search';
import NotFound from './routes/not-found';

const App = () => {
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

export default App;
