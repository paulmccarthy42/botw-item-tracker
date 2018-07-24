import React from "react"
import PropTypes from "prop-types"
import ArmorPiece from './ArmorPiece.js'
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Hey { this.props.player.name }, listen! </h1>
        {
          this.props.player.armor.map(piece => <ArmorPiece piece={piece.name} key={piece.id} />)
        }
      </div>
      );
  }
}

App.propTypes = {
  player: PropTypes.object.isRequired
}

export default App
