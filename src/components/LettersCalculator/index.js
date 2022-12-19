import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeInputPhrase = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="letters-calculator-container">
        <div className="input-container">
          <h1 className="letters-caluclate">
            Calculate the <br /> Letters you <br /> enter
          </h1>
          <label htmlFor="phrase-text" className="input-text">
            Enter the phrases
          </label>
          <input
            id="phrase-text"
            type="text"
            placeholder="Enter the Phrase"
            className="phrase"
            onChange={this.onChangeInputPhrase}
          />
          <p type="button" className="phrases-count-button">
            No.of letters: {searchInput.length}
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letters-calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
