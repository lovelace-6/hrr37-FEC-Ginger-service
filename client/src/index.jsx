import React from 'react';
import ReactDOM from 'react-dom';
import Author from '../components/Author.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Author />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
