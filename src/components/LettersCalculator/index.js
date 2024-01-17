// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onchange = e => {
    this.setState({count: e.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="text-container">
            <h1>Calculate the Letters you Enter</h1>
            <div>
              <label htmlFor="letter">Enter the phrase</label>
              <br />
              <input
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                className="typing"
                onChange={this.onchange}
              />
            </div>
            <br />
            <p type="button" className="button">
              No.of Letters: {count.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
