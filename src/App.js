import Home from './views/Home';
import LogIn from './views/Login';
import Notfound from './components/404';
import Admin from './views/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/admin" exact>
            <LogIn />
        </Route>
        <Route exact path="/info" component={()=> <Admin authorized={true} />} />
        <Route path="*">
            <Notfound />
        </Route>
      </Switch>
    </Router> 
    </>
  );
}

export default App;
