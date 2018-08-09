import React from "react"
import PropTypes from "prop-types"
import axios from "axios"

class ArmorPiece extends React.Component {
  constructor(props) {
    super(props)

    // store props in state on component mount

    this.levelUp = this.levelUp.bind(this)
  }

  levelUp () {
    axios.patch('/armor_pieces/' + this.props.id).then(response => console.log(response.data)).catch(e => console.log(e))
    // axios to piece controller
  }

  levelDown () {
    // axios to piece controller
  }

  render () {
    return (
      <div>
        <strong>{ this.props.piece }</strong>, Level {this.props.level} 
        <button onClick={this.levelUp}>+</button>
        <button onClick={this.levelDown}>-</button>
      </div>
    );
  }
}

export default ArmorPiece
