import React from 'react'
import './App.css'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  /**
   *  If we remove this component(Counter) from DOM, this console.log('counter') will continue to run
   */
  componentDidMount() {
    console.log('componentDidMount')
    this.timer = setInterval(() => { // So, we can assign variable, then delete when componentWillUnmount
      console.log('counter')
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }

  render() {
    console.log('render')
    return <div>Hello World!</div>
  }

}

class App extends React.Component {

  state = {
    isShow: true,
  }

  render() {
    const {isShow} = this.state

    return (
        <div>
          {isShow && <Counter/>}
          <button onClick={() => {
            this.setState({isShow: false})
          }}>Remove Counter
          </button>
        </div>
    )
  }

}

export default App
