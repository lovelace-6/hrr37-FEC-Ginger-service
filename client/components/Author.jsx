import React from 'react';
import styled from 'styled-components';

const About = styled.h1`
  font-family: lato, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #382110;
  text-transform: uppercase;
  border-bottom: 1px solid #D8D8D8;
`;

const H2 = styled.h2`
  font-family: merriweather, serif;
`;

const Container = styled.div`
  float: right;
  display: inline;
  width: 300px;
`;

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: []
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/books/1/authors/1')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({
        authors: data
      })
    })
  }
  render() {
    return (
      <Container>
        {this.state.authors.map(item => {
          return (
            <div>
            <About>
              About {item.name}
              </About>
            <img src={item.profile_pic}></img>
            <H2>
            {item.name}
            </H2>
            <button>Follow Author</button>
            <p>{item.details}</p>
            </div>
          )
        })}
      </Container>
    )
  }
}

export default Author;
