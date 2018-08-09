import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      items: [],
    }

    this.newItem = this.newItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
  }

  componentDidMount () {
    this.setState({items: this.props.items})
  }

  updateItem () {
    this.setState({name: document.getElementById('name-item').value})
  }

  newItem () {
    axios.post('http://localhost:3000/items', {name: this.state.name})
      .then(response => {
        this.setState({items: response.data})
        this.setState({name: ""})
      })
      .catch(e => console.log (e, this.state))
  }

  render () {
    return (
      <div>
        <ul>
          { this.state.items.map(item => <li key={item.id}>{item.name}</li>)} 
        </ul>
        <input type='text' placeholder='New Item Name' id='name-item' value={this.state.name} onChange={this.updateItem}/>
        <button onClick={this.newItem}>Submit</button>
      </div>
    );
  }
}

export default Items
