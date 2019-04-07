import React from 'react';
import styled from 'styled-components';
import ShelfButton from '../components/ShelfButton.jsx';

const DropDownList = styled.ul`
  font-family: Lato, Helvetica Neue, Arial, sans-serif;
  font-size: 12px;
  margin-top: 0px;
  list-style-type: none;
  cursor: pointer;
  background-color: #ffffff;
  text-align: left;
  li:hover {
    background-color: #f1f1f1;
  }
`;

// const DropDownItem = styled.li`

// `;

const DropDownContainer = styled.div`
  max-height: 250px;
  margin: 0px;
  padding: 0px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  z-index: 1001000;
  top: 260px;
  width: 180px;
  position: absolute;
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
        Want to Read
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
