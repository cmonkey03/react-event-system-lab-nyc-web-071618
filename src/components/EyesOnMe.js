// Code EyesOnMe Component Here

import React, { Component } from 'react'

export default class EyesOnMe extends Component {


  focusFires = () => console.log('Good!')

  blurFires = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <div>
        <button
          onFocus={this.focusFires}
          onBlur={this.blurFires}
        />
      </div>
    )
  }

}
