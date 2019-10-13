import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Menu inverted vertical>
      <Menu.Item name="home" />
      <Menu.Item name="messages" />
      <Menu.Item name="friends" />
    </Menu>
  );
};

export default NavBar;
