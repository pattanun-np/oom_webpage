import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Gallery from './components/Gallery';
import Support from './components/Support';
import Shop from './components/Shop';
import Login from './components/Login';
class App extends Component {
  render() {
    return (
    <div>
      <Switch>
                <Route  exact path="/" component={ Home } />
                <Route  exact path="/news" component={News} />
                <Route  exact path="/gallery" component={Gallery} />
                <Route  exact path="/about" component={About} />
                <Route  exact path="/support" component={Support} />
                <Route  exact path="/shop" component={Shop} />
                <Route  exact path="/login" component={Login} />
      </Switch>
   </div>

    );
  }
}


export default App;
