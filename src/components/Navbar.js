import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo_final.png'
import { Container, Dropdown, Menu, Image} from 'semantic-ui-react';

const Navbar = () => (
  <Menu fixed='top' style={{background:"#AFEEEE"}} centered>
    <Container >
      <Menu.Item as='a' header>
        <Image size='mini' src={ logo } style={{ marginRight: '1.5em'}} />
        <a href="/">
          Hands On Healing For the Body
        </a>
      </Menu.Item>
      <Menu.Item as='a'><a href="/">Home</a></Menu.Item>
      <Menu.Item as='a'><Link to='/about'>About</Link></Menu.Item>
      <Dropdown text='Massages' pointing className='link item'>
        <Dropdown.Menu>
          <Dropdown.Item><Link to='/western-massage'>Western Massage</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/deep-tissue-massage'>Deep Tissue Massage</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/myofascial-release'>Myofascial Release</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/post-natal-massage'>Post-Natal Massage</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/pre-natal-massage'>Pre-Natal Massage</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/sports-massage'>Sports Massage</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/swedish-massage'>Swedish Massage</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/trigger-point-massage'>Trigger Point Massage</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as='a'><Link to='/prices'>Prices</Link></Menu.Item>
      <Menu.Item as='a'><Link to='/policies'>Policies</Link></Menu.Item>
      <Menu.Item as='a'><Link to='/benefits'>Benefits</Link></Menu.Item>
      <Menu.Item as='a'><Link to='/serviceareas'>Service Areas</Link></Menu.Item>
      <Menu.Item as='a'><Link to="/contact">Contact</Link></Menu.Item>
    </Container>
  </Menu>
)

export default Navbar;
