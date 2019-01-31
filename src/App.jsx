import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
                <Route exact path="/" component={ Home } />
                <Route  exact path="/news" component={News} />
                <Route  exact path="/gallery" component={Gallery} />
                <Route  exact path="/about" component={About} />
      </Switch>

  
       </div>

    );
  }
}


export default App;
