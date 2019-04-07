import React from 'react';
import styled from 'styled-components';
import ShelfButton from '../components/ShelfButton.jsx';

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

class ShelfList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <DropDownContainer>
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
    )
  }
}

export default ShelfList;
