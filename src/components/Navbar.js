import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../favicon.ico'
import { Container, Dropdown, Menu, Image} from 'semantic-ui-react';

const Navbar = () => (
  <Menu fixed='top' style={{background:"#AFEEEE"}}>
    <Container >
      <Menu.Item as='a' header>
        <Image size='mini' src={ logo } style={{ marginRight: '1.5em'}} />
        Hands On Healing For the Body
      </Menu.Item>
      <Menu.Item as='a'><a href="/">Home</a></Menu.Item>
      <Menu.Item as='a'><Link to='/about'>About</Link></Menu.Item>
      <Dropdown text='Massages' pointing className='link item'>
        <Dropdown.Menu>
          <Dropdown.Item>Western Massage</Dropdown.Item>
          <Dropdown.Item>Deep Tissue Massage</Dropdown.Item>
          <Dropdown.Item>Myofascial Release</Dropdown.Item>
          <Dropdown.Item>Post-Natal Massage</Dropdown.Item>
          <Dropdown.Item>Pre-Natal Massage</Dropdown.Item>
          <Dropdown.Item>Sports Massage</Dropdown.Item>
          <Dropdown.Item>Swedish Massage</Dropdown.Item>
          <Dropdown.Item>Trigger Point Massage</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as='a'><Link to='/prices'>Prices</Link></Menu.Item>
      <Menu.Item as='a'><Link to='/policies'>Policies</Link></Menu.Item>
      <Menu.Item as='a'><Link to='/benefits'>Benefits</Link></Menu.Item>
      <Menu.Item as='a'>Service Areas</Menu.Item>
      <Menu.Item as='a'><Link to="/contact">Contact</Link></Menu.Item>
    </Container>
  </Menu>
)

export default Navbar;
