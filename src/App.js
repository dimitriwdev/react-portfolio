import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/knowledges' exact component={Knowledges} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route path='/contact' exact component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;