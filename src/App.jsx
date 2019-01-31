import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route} from 'react-router-dom'
=======
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Gallery from './components/Gallery';
import Navbar from './components/CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './components/Footer';
>>>>>>> a67a56ad69aa43dfab44d017a305832c7d4406be

class App extends Component {
  render() {
    return (
      
      <Switch>
                <Route exact path="/" component={ Home } />
                <Route  exact path="/news" component={News} />
                <Route  exact path="/gallery" component={Gallery} />
                <Route  exact path="/about" component={About} />
      </Switch>
<<<<<<< HEAD
  
       </div>
=======
      
>>>>>>> a67a56ad69aa43dfab44d017a305832c7d4406be
    );
  }
}


export default App;
