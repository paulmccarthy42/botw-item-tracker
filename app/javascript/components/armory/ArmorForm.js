import React from "react"
import PropTypes from "prop-types"
class ArmorForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      upgradeable: false,
      levels: []
    }
  }

  handleCheckmarking() {
    console.log(this.state.upgradeable)
  }

  render () {
    return (
      <div>
        <input type="text" name="name" placeholder="Enter armor name" value={this.state.title} />
        <br /> Can be upgraded? <input type="checkbox" name="upgradeable" checked={this.state.upgradeable} onChange={this.handleCheckmarking}/>
      </div>
    );
  }
}

export default ArmorForm
