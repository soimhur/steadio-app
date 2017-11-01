import React, { Component } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

export default class SlideMemu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item">home</a>
        <a id="about" className="menu-item">about</a>
      </Menu>
    );
  }
}