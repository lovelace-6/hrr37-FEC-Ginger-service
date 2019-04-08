import React from 'react';
import styled from 'styled-components';
import ShelfButton from '../components/ShelfButton.jsx';

const DropDownList = styled.ul`
  font-family: Lato, Helvetica Neue, Arial, sans-serif;
  font-size: 12px;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  cursor: pointer;
  background-color: #ffffff;
  text-align: left;
  li {
    padding: 4px;
    padding-left: 15px;
    &:hover {
    background-color: #f1f1f1;
   }
  }
`;

const DropDownContainer = styled.div`
  max-height: 250px;
  margin: 2px;
  padding: 0px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  z-index: 1001000;
  top: 28px;
  width: 180px;
  position: absolute;
`;

class ShelfList extends React.Component {

  constructor(props) {
    super(props);
  }
  handleClick(e) {
    this.props.shelfSelect(e.target.textContent);
    this.props.toggleList();
  }
  render() {
    return (
      <DropDownContainer>
      <DropDownList>
      <li onClick={this.handleClick.bind(this)}>
        Read
      </li>
      <li onClick={this.handleClick.bind(this)}>
        Currently Reading
      </li>
      <li onClick={this.handleClick.bind(this)}>
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
