import React from 'react';
import styled from 'styled-components';

const ToolTipContainer = styled.section`
border: 5px solid #D6D0C4;
border-radius: 5px;
box-shadow: 0 1px 2px rgba(0,0,0,0,15);
padding: 10px;
z-index: 10;
width: 380px;
`;

const Title = styled.h1`
  font-family: Merriweather, Georgia, serif;
  font-weight: bold;
  font-size: 14px;
  color: #33333;
  line-height: 21px;
`;

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: 0,
      books: []
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:3000/books/1/authors/1/titles')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        books: data
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.books.map(item => {
          return (
            <ToolTipContainer>
            <Title>
            {item.title}
            </Title>
          </ToolTipContainer>
          )
        })}
      </div>
    )
  }
}

export default ToolTip;
