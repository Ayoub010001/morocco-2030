import './App.css';
import Nav from './components/Nav'
import Home from './views/Home'
import VisitPlaces from './views/VisitPlaces';
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/VisitPlaces/:stadiumId">
        <VisitPlaces />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
