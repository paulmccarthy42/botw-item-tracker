import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>Hey { this.props.player.name }, listen! </div>
    );
  }
}

App.propTypes = {
  player: PropTypes.object.isRequired
}

export default App
