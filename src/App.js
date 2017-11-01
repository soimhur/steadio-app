import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import SlideMenu from './SlideMenu';

const Introduction = styled.section`
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
const SubSection = styled.section`
  height: 100vh;
  width: 100vw;
  background: #ededed;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <SlideMenu />
        <Introduction>
          steadio
        </Introduction>
        <SubSection>
          very nice
        </SubSection>
      </div>
    );
  }
}

export default App;
