import React from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './components/Board';

const Container = styled.div`

  background-color: #f6f7f9;
  width: 100%;
  height: 100vh;

`

function App() {
  return (
    <Container>
      <Board>
        hello world
      </Board>
    </Container>
  );
}

export default App;
