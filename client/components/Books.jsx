import React from 'react';
import styled from 'styled-components';
import ToolTip from '../components/ToolTip.jsx';

const BookCover = styled.img`
  width: 50px;
`;

const BookContainer = styled.div`
  display: inline;
`;

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.displayToolTip = this.displayToolTip.bind(this);
    this.state = {
      books: [],
      bookId: null
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
  displayToolTip(id) {
    this.setState({
      bookId: id
    })
  }
  render() {
    return (
      <div>
        {this.state.books.map(item => {
          return (
            <BookContainer key={item.id}>
            <BookCover key={item.id} onMouseEnter={() => {this.displayToolTip(item.id)}} src={item.cover} />
            </BookContainer>
          )
        })}
        <ToolTip />
      </div>
    )
  }
}

export default Books;
