import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Prices from './components/Prices';
import Policies from './components/Policies';
import Benefits from './components/Benefits';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Container style={{margin: '7em 3em 3em 3em' }}>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/prices' component={Prices}/>
            <Route path='/policies' component={Policies}/>
            <Route path='/benefits' component={Benefits}/>
            <Route path='/contact' component={Contact}/>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
