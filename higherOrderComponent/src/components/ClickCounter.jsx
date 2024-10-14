/* eslint-disable react/prop-types */
import { Component } from "react"
import withIncrement from "./HigherOrderComponent/withIncrement"

class ClickCounter extends Component {
  render() {
    const { count, handleCounter } = this.props
    return (
      <div className='grid place-content-center m-4'>
        <div className='display text-2xl text-center'>
          {count}
        </div>
        <button
          className='bg-purple-200 p-3 rounded-lg active:bg-purple-500 active:text-white ring-1'
          onClick={handleCounter}
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default withIncrement(ClickCounter)
