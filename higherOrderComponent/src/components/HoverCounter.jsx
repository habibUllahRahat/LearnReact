/* eslint-disable react/prop-types */
import { Component } from "react"
import withIncrement from "./HigherOrderComponent/withIncrement"

class HoverCounter extends Component {
  render() {
    const { count, handleCounter } = this.props
    return (
      <div className='grid place-content-center m-4'>
        <div className='display text-2xl text-center'>
          {count}
        </div>
        <button
          className='bg-red-200 p-3 rounded-lg active:bg-red-500 active:text-white ring-1'
          onMouseOver={handleCounter}
        >
          Hover Me
        </button>
      </div>
    )
  }
}

export default withIncrement(HoverCounter)
