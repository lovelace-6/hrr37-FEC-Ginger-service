import React from 'react';
import styled from 'styled-components';
import ShelfList from '../components/ShelfList.jsx'

const Wrapper = styled.div`
  position: relative;
`;

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
  width: 130px;
  padding: 6px 0 6px 8px;
  outline: none;
`;

const DropDownButton = styled.button`
  height: 28px;
  width: 27px;
  padding 5px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #409D69;
  cursor: pointer;
  outline: none;
`;

class ShelfButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      shelf: 'Want to Read'
    }
  }
  toggleList() {

    this.setState({
      showList: !this.state.showList
    })
  }
  shelfSelect(val) {
    this.setState({
      shelf: val
    })
  }
  render() {
    return (
      <Wrapper>
        <MainButton>
          {this.state.shelf}
        </MainButton>
        <DropDownButton onClick={this.toggleList.bind(this)}>
        </DropDownButton>
        {
          this.state.showList ? (
        <ShelfList id={this.props.id} toggleList={this.toggleList.bind(this)} shelfSelect={this.shelfSelect.bind(this)} />
          ) : (
            null
          )
        }
      </Wrapper>
    )
  }
}

export default ShelfButton;
