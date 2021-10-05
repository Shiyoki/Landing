import Home from './views/Home';
import Notfound from './components/404';
import {
  BrowserRouter as HashRouter,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <>
    <HashRouter>
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </HashRouter>
    
    </>
  );
}

export default App;
