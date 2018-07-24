import React from "react"
import PropTypes from "prop-types"
import ArmorCard from "./ArmorCard"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="row">
        {
          this.props.armors.map(armor => <ArmorCard key={armor.id} name={armor.name} levels={armor.levels} />)
        }
        <button style={{width: '18rem'}}>+</button>
      </div>
    );
  }
}

App.propTypes = {
  armors: PropTypes.array.isRequired
}

export default App
