import React, {Component} from 'react';
import NumberBox from '../components/NumberBox';
import '../assets/stylesheets/App.css';
const classNames = require('classnames');

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      array: Array.from({length: 10}, () => {
        return {number: 1 + Math.floor(Math.random() * Math.floor(100)), selected: false};
      })
    }
  }

  reset = () => {
    this.setState({
      array: Array.from({length: 10}, () => {
        return {number: 1 + Math.floor(Math.random() * Math.floor(100)), selected: false};
      })
    })
  }

  // slideBoxes = (boxLeft, boxRight) => {
  //   const slideRight = document.getElementById(`array-${boxLeft.index}`);
  //   const slideLeft = document.getElementById(`array-${boxRight.index}`);
  //   for (let step = 10000; step > 1; step--) {
  //     slideRight.style.right = `${Math.floor(boxLeft.end/step)}px`;
  //     slideLeft.style.left = `${Math.floor(boxRight.end/step)}px`;
  //   } 
  // }

  bubbleSort = () => {
    for (let i = 0; i < this.state.array.length; i++) {
      setTimeout(() => {
        for (let j = 1; j < this.state.array.length; j++) {
          if (this.state.array[j - 1].number > this.state.array[j].number) {
            // this.slideBoxes({index: j-1, start: 0, end: -100}, {index: j, start: 0, end: -100})
            this.setState({array: [...this.state.array.slice(0, j-1), this.state.array[j], this.state.array[j-1], ...this.state.array.slice(j+1)]});
          }
        }
      }, 250 * (i + 1));
    }
  }
  
  renderNumberBoxes = () => {
    return this.state.array.map((num, i) => {
      return <NumberBox key={i} index={i} number={num.number} classes={classNames("array-container")}/>
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Bubble Sort Illustration</h1>
        <div id="sort-container">
          {this.renderNumberBoxes()}
        </div>
        <div id="sort-button-container">
          <button onClick={this.bubbleSort}> Sort </button>
          <button onClick={this.reset}> Reset </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

