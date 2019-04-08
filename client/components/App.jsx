import React from 'react';
import Author from '../components/Author.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 400px;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Author />
      </Wrapper>
    );
  }
}

export default App;
