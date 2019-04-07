import React from 'react';
import styled from 'styled-components';
import ShelfList from '../components/ShelfList.jsx'

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
  outline: none;
`;

const DropDownButton = styled.button`
  height: 28px;
  width: 27px;
  padding 5px;
  background-color: #409D69;
  cursor: pointer;
  outline: none;
`;

class ShelfButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    }
  }
  toggleList(e) {
    e.preventDefault();
    this.setState({
      showList: !this.state.showList
    })
  }
  render() {
    return (
      <div>
        <form>
        <MainButton>
          Want to Read
        </MainButton>
        <DropDownButton onClick={this.toggleList.bind(this)}>
        </DropDownButton>
        {
          this.state.showList ? (
        <ShelfList showList={this.state.showList} />
          ) : (
            null
          )
        }
        </form>
      </div>
    )
  }
}

export default ShelfButton;
