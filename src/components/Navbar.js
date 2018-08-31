import React from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu fixed='top'>
    <Container>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>About</Menu.Item>
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
      <Menu.Item>Prices</Menu.Item>
      <Menu.Item>Policies</Menu.Item>
      <Menu.Item>Benefits</Menu.Item>
      <Menu.Item>Service Areas</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    </Container>
  </Menu>
)

export default Navbar;
