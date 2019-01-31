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
      <Switch>
                <Route exact path="/" component={ Home } />
                <Route  exact path="/news" component={News} />
                <Route  exact path="/gallery" component={Gallery} />
                <Route  exact path="/about" component={About} />
      </Switch>
       <div>
      	<SnowStorm />
         <Navbar />
         <FooterPage />
       </div>
      

    );
  }
}


export default App;
