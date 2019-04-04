import React from 'react';
import styled from 'styled-components';

const BookCover = styled.img`
  width: 50px;
`;

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            <BookCover src={item.cover} />
          )
        })}
      </div>
    )
  }
}

export default Books;
