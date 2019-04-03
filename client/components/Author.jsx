import React from 'react';

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
      <div className="author">
        {this.state.authors.map(item => {
          console.log(item)
          return <div>
            <h2>About {item.name}</h2>
            <img src={item.profile_pic}></img>
            <h3>{item.name}</h3>
            <button>Follow Author</button>
            <p>{item.details}</p>
          </div>
        })}
      </div>

    )

  }
}

export default Author;
