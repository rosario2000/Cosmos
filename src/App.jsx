import './App.css';
import Nav from "../src/components/Nav/Nav"
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Foot from './components/Foot/Foot';
import Star from './components/Star/Star';
import Planet from './components/Planets/Planet';
import Info from './components/Info/Info';
import Auth0ProviderWithHistory from './auth0Provider';
import Profile from './components/Profile/Profile';

const App = () => {

  return (
    <Router>
      <Auth0ProviderWithHistory>
      <div className="app">
        <Nav/>
        <div className="content">
        <Switch>

           <Route exact path = "/">
              <Home/>
           </Route>
           <Route exact path = "/Star">
              <Star/>
           </Route>
           <Route exact path = "/Planet">
              <Planet/>
           </Route>
           <Route exact path = "/:id">
              <Info/>
           </Route>
           <Route exact path = "/profile">
              <Profile/>
           </Route>

        </Switch>
        </div>
        <Foot/>
      </div>
      </Auth0ProviderWithHistory>
    </Router>
  );
};

export default App;