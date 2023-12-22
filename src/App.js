import './App.css';
import Nav from './components/Nav'
// import Home from './views/Home'
import VisitPlaces from './views/VisitPlaces';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      <VisitPlaces />
      <Footer />
    </div>
  );
}

export default App;
