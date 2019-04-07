import React from 'react';
import styled from 'styled-components';

const MainButton = styled.button`
  background-color: #409D69;
  font-family: Lato, Helvetica Neue, Arial, sans-serif;
  color: #fff;
  height: 28px;
  font-size: 13px;
  text-align: left;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  margin-bottom: 10px;
  width: 110px;
  padding: 6px 0 6px 8px;
`;

const DropDownButton = styled.button`
  height: 28px;
  width: 27px;
  padding 5px;
  background-color: #409D69;
`;

const DropDownList = styled.ul`
  font-family: Lato, Helvetica Neue, Arial, sans-serif;
  font-size: 12px;
  list-style-type: none;
`;

const DropDownContainer = styled.div`
  max-height: 215px;
  margin: 2px 0px 0px 0px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 2px;
`;

class ShelfButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }
  render() {
    return (
      <div>
        <form>
        <DropDownContainer>
        <MainButton>
          Want to Read
        </MainButton>
        <DropDownButton>
        </DropDownButton>
        <DropDownList>
          <li>
            Read
          </li>
          <li>
            Currently Reading
          </li>
          <li>
            currently-reading-again
          </li>
        </DropDownList>
        </DropDownContainer>
        </form>
      </div>
    )
  }
}

export default ShelfButton;
