import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    isShow: true,
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this)
  }

  /**
   * If it is arrow function, then you do NOT need to bind these.
   *
   * OLD ONE :
   * handleClick() {
   *   this.setState({isShow: false})
   * }
   *
   * Then,
   *
   * You should bind these
   *
   * this.handleClick = this.handleClick.bind(this)
   */
  handleClick = () => {
    this.setState({isShow: false})
  }

  render() {
    const {isShow} = this.state

    console.log('render')

    return (
        <div>
          {isShow.toString()}
          <button onClick={this.handleClick}>Toggle
          </button>
        </div>
    )
  }
}

export default App
