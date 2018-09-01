import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Container style={{padding: '8em 3em 3em 3em' }}>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/FixedMenuLayout.js
