import React from 'react';

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: []
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:3000/books/1')
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
      <div className="author">
        {this.state.authors.map(item => {
          return <div>
            <h2>About {item.author}</h2>
            <h3>{item.author}</h3>
            <button>Follow Author</button>
            <p>{item.author_details}</p>
          </div>
        })}
      </div>

    )

  }
}

export default Author;
