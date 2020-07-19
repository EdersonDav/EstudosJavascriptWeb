import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }
    this.add = this.add.bind(this)
  }
  count = 1;
  add() {
    this.setState((state) => { return { count: state.count + 1 } }, () => {
      localStorage.setItem("state", JSON.stringify(this.state))
    })
  }

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")))

  }

  render() {
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}
export default Counter;