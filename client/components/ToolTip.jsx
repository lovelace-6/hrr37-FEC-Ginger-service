import React from 'react';
import styled from 'styled-components';

const ToolTipContainer = styled.section`
border: 5px solid #D6D0C4;
border-radius: 5px;
padding-left: 10px;
box-shadow: 0 1px 2px rgba(0,0,0,0,15);
position: absolute;
right: -11px;
z-index: 10;
top: 8px;
width: 380px;
`;

const Title = styled.h1`
  font-family: Merriweather, Georgia, serif;
  font-weight: bold;
  font-size: 14px;
  color: #33333;
  line-height: 21px;
`;

const ToolTipTail = styled.div`
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 10px solid #D6D0C4;
  position: absolute;
  right: 20px;
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
`;

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: 0,
      books: []
    }
  }

  render() {
    console.log(this.props.cover)
    return (
      <Wrapper>
      <ToolTipTail>
      <ToolTipContainer onMouseEnter={() => {this.props.onMouseEnter(this.props.id)}} onMouseLeave={this.props.onMouseLeave}>
      <Title>
      {this.props.title}
      </Title>
    </ToolTipContainer>
    </ToolTipTail>
    </Wrapper>
    )
  }
}

export default ToolTip;
