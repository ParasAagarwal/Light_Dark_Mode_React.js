import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    const {isDarkMode} = this.state
    if (isDarkMode === true) {
      this.setState({isDarkMode: false})
    } else {
      this.setState({isDarkMode: true})
    }
  }

  render() {
    const {isDarkMode} = this.state
    const requiredClass = isDarkMode ? 'Light-mode' : 'dark-mode'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'
    return (
      <div className="app-container">
        <div className={`container ${requiredClass}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
