import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Gallery from './components/Gallery';
import Navbar from './components/CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './components/Footer';
class App extends Component {
  render() {

    return (
      <Router>
       <div>
      	<SnowStorm />
         <Navbar />
         <Route exact path="/" component={Home} />
         <Route  path="/news" component={News} />
         <Route  path="/gallery" component={Gallery} />
         <Route  path="/about" component={About} />
         <FooterPage />
       </div>
      </Router>

    );
  }
}


export default App;
