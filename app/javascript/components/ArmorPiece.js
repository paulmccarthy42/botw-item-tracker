import React from "react"
import PropTypes from "prop-types"
class ArmorPiece extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>{ this.props.piece }</div>
    );
  }
}

export default ArmorPiece
