import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {count: false}

  onChange = () => {
    this.setState(prevState => ({count: !prevState.count}))
  }

  changing = () => {
    const {count} = this.state
    if (count === true) {
      return (
        <div className="card2">
          <h1 className="heading2">Click to change mode</h1>
        </div>
      )
    }
    return (
      <div className="card">
        <h1 className="heading">Click to change mode</h1>
      </div>
    )
  }

  render() {
    return (
      <div className="bgContainer">
        {this.changing()}
        <button className="button" onClick={this.onChange}>
          Light Mode
        </button>
      </div>
    )
  }
}
export default LightDarkMode
