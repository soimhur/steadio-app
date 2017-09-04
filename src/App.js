import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import styled from 'styled-components';

const Introduction = styled.div`
  height: 100vh;
  width: 100vw;
  background: #222;
  color: white;
  font-size: 8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Introduction>
          steadio
        </Introduction>
      </div>
    );
  }
}

export default App;
