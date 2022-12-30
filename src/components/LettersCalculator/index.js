// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeEvent = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bgContainer">
        <div className="contentContainer">
          <div className="textContent">
            <h1 className="heading">Calculate the letters you enter</h1>
            <label htmlFor="inputEl" className="label">
              Enter the phrase
            </label>
            <input
              id="inputEl"
              className="inputElement"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onChangeEvent}
            />
            <p className="displayCount">No.of letters: {count}</p>
          </div>
          <div className="img-container">
            <img
              className="logo"
              alt="letters calculator"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
