import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    isShow: true,
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log(`shouldComponentUpdate`)
    console.log(nextProps, nextState, nextContext)

    if (this.state.isShow !== nextState.isShow) {
      return false
    }

    return true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`componentDidUpdate`)
  }

  render() {
    const {isShow} = this.state

    console.log('render')

    return (
        <div>
          {isShow.toString()}
          <button onClick={() => {
            this.setState({isShow: !isShow})
          }}>Toggle
          </button>
        </div>
    )
  }
}

export default App
