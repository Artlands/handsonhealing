import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Carousel from 'nuka-carousel';

class Slides extends Component {
  render() {
    return (
      <Carousel slidesToShow={1} cellSpacing={20} speed={500} dragging={true} >
        <Image src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/06/bg.jpg' rounded />
        <Image src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/06/bg2.jpg' rounded />
        <Image src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/06/bg4.jpg' rounded />
        <Image src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/06/bg6.jpg' rounded />
        <Image src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/06/bg1.jpg' rounded />
        <Image src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/06/bg3.jpg' rounded />
        <Image src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/06/bg5.jpg' rounded />
        <Image src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/06/bg7.jpg' rounded />
      </Carousel>
    );
  };
}

export default Slides;
