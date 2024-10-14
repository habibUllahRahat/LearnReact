import { Component } from "react"

export default function withIncrement(OriginalComponent) {
  class NewComponentWithIncrement extends Component {
    state = {
      count: 0,
    }
    handleStateIncrement = () => {
      this.setState({
        count: this.state.count + 1,
      })
    }
    render() {
      const { count } = this.state
      return (
        <OriginalComponent
          count={count}
          handleCounter={this.handleStateIncrement}
        />
      )
    }
  }

  return NewComponentWithIncrement
}
