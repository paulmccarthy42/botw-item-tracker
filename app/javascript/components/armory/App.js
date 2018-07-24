import React from "react"
import PropTypes from "prop-types"
import ArmorCard from "./ArmorCard"
import ArmorForm from "./ArmorForm"

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
        <button style={{width: '22rem'}}>+</button>
        <ArmorForm />
      </div>
    );
  }
}

App.propTypes = {
  armors: PropTypes.array.isRequired
}

export default App
