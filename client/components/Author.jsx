import React from 'react';
import styled from 'styled-components';
import Books from '../components/Books.jsx';

const About = styled.h1`
  font-family: lato, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #382110;
  text-transform: uppercase;
  padding-bottom: 10px;
  border-bottom: 1px solid #D8D8D8;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Name = styled.div`
  font-family: merriweather, serif;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  display: flex;
  width: 300px;
  margin: 50px;
`;

const Image = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-right: 12px;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
`;

const Button = styled.button`
  border: 1px solid #D6D0C4;
  font-family: lato, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1;
  background-color: #F4F1EA;
  color: #333333;
  border-radius: 3px;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #ede6d6;
  }
`;

const Details = styled.p`
  font-family: lato, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

const Followers = styled.div`
  font-family: lato, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #999999;
  margin-bottom: 4px;
  margin-top: 4px;
`

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/books/1/authors/1')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          authors: data,
      });
    });
  }

  render() {
    return (
      <Container>
        {this.state.authors.map(item => (
          <div key={item.id}>
            <About>
              About
              {' '}
              {item.name}
            </About>
            <Header>
              <Image src={item.profile_pic} />
              <div>
                <Name>
                  {item.name}
                </Name>
                <Followers>
                {item.followers.toLocaleString()}
                {' followers'}
                </Followers>
                <Button>
              Follow Author
                </Button>
              </div>
            </Header>
            <Details>
              {item.details}
            </Details>
            <About>
            books by {item.name}
            </About>
            <Books author={item.name} />
          </div>

        ))}
      </Container>
    );
  }
}

export default Author;
