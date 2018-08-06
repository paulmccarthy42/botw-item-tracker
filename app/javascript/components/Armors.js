import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Armors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      armors: []
    }

    this.updateArmor = this.updateArmor.bind(this)
    this.newArmor = this.newArmor.bind(this)
  }

  componentDidMount () {
    this.setState({armors: this.props.armors})
  }

  updateArmor () {
    console.log(":P")
    this.setState({name: document.getElementById('name-armor').value})
  }

  newArmor () {
    axios.post('http://localhost:3000/armors', {name: this.state.name})
      .then(response => {
        this.setState({armors: response.data})
        this.setState({name: ""})
      })
      .catch(e => console.log (e, this.state))
  }

  render () {
    return (
      <div>
        <ul>
          { this.state.armors.map(armor => <li key={armor.id}>{armor.name}</li>)}
        </ul>
        <input type='text' placeholder='New armor Name' id='name-armor' value={this.state.name} onChange={this.updateArmor}/>
        <button onClick={this.newArmor}>Submit</button>
      </div>
    );
  }
}

export default Armors
