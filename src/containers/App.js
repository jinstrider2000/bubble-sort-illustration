import React, {Component} from 'react';
import NumberBox from '../components/NumberBox';
import '../assets/stylesheets/App.css';

// const classNames = require('classnames');

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      array: Array.from({length: 10}, () => {
        return {number: 1 + Math.floor(Math.random() * Math.floor(100)), selected: false};
      })
    }
  }

  bubbleSort = () => {
    for (let i = 0; i < this.state.array.length; i++) {
      setTimeout(() => {
        for (let j = 1; j < this.state.array.length; j++) {
          if (this.state.array[j - 1].number > this.state.array[j].number) {
            this.setState({array: [...this.state.array.slice(0, j-1), this.state.array[j], this.state.array[j-1], ...this.state.array.slice(j+1)]});
          }
        }
      }, 250 * (i + 1));
    }
  }
  
  renderNumberBoxes = () => {
    return this.state.array.map((num, i) => {
      return <NumberBox key={i} index={i} number={num.number} classes=""/>
    });
  }

  render() {
    return (
      <div id="sort-container">
        {this.renderNumberBoxes()}
        <button onClick={this.bubbleSort}> Sort </button>
      </div>
    );
  }
}

export default App;

