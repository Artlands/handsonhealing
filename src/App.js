import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import WesternMassage from './components/WesternMassage';
import DeepTissueMassage from './components/DeepTissueMassage';
import MyofascialRelease from './components/MyofascialRelease';
import PostNatalMassage from './components/Post-NatalMassage';
import PreNatalMassage from './components/Pre-NatalMassage';
import SprotsMassage from './components/SprotsMassage';
import SwedishMassage from './components/SwedishMassage';
import TriggerPointTherapy from './components/TriggerPointTherapy';
import Prices from './components/Prices';
import Policies from './components/Policies';
import Benefits from './components/Benefits';
import ServiceAreas from './components/ServiceAreas';
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
            <Route path='/western-massage' component={WesternMassage}/>
            <Route path='/deep-tissue-massage' component={DeepTissueMassage}/>
            <Route path='/myofascial-release' component={MyofascialRelease}/>
            <Route path='/post-natal-massage' component={PostNatalMassage}/>
            <Route path='/pre-natal-massage' component={PreNatalMassage}/>
            <Route path='/sports-massage' component={SprotsMassage}/>
            <Route path='/swedish-massage' component={SwedishMassage}/>
            <Route path='/trigger-point-massage' component={TriggerPointTherapy}/>
            <Route path='/prices' component={Prices}/>
            <Route path='/policies' component={Policies}/>
            <Route path='/benefits' component={Benefits}/>
            <Route path='/serviceareas' component={ServiceAreas}/>
            <Route path='/contact' component={Contact}/>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
