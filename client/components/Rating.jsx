import React from 'react';
import styled from 'styled-components';

const RatingContainer = styled.div`
  font-family: Lato, Helvetica Neue, Arial, sans-serif;
  font-size: 11px;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 5px;
`;

class Rating extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <RatingContainer>Rate this book</RatingContainer>
    )
  }
}

export default Rating;
