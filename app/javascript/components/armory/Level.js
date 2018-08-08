import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Level extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item0: {
        name: '',
        count: 0,
      },
      item1: {
        name: '',
        count: 0,
      },
    }

    this.submit = this.submit.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  updateState (item, value) {
    let newState = this.state;
    newState[item][value] = document.getElementById(`${this.props.id}-${item}-${value}`).value
    this.setState(newState)
    console.log(this.state)
  }

  submit () {
    let responses = []
    if (this.state.item0.name && this.state.item0.count) {
      axios.post('/level_up_items', {
        level: this.props.id,
        item: this.state.item0.name,
        count: this.state.item0.count
      })
        .then(data => responses.push(data.data))
        .catch(e => responses.push(e))
    }
    if (this.state.item1.name && this.state.item1.count) {
      axios.post('/level_up_items', {
        level: this.props.id,
        item: this.state.item1.name,
        count: this.state.item1.count
      })
        .then(data => responses.push(data.data))
        .catch(e => responses.push(e))
    }
    console.log(responses)
  }

  render () {
    return (
      <div style={{clear: 'left'}}>
        <div style={{float: 'left'}}>
          <p className='card-text'> Level {this.props.level}: </p>
        </div>
        <div style={{float: 'left'}}>
          {
            this.props.items.length > 0 &&
              <ul>
                <li> {this.props.items[0].name}: {this.props.items[0].count}</li>
                {this.props.items.length > 1 &&
                  <li> {this.props.items[1].name}: {this.props.items[1].count}</li>}
              </ul>
          }
          { this.props.items.length === 0 &&
            <ul>
              <li>
                <select id={`${this.props.id}-item0-name`} onChange={() => this.updateState('item0', 'name')}>
                <option value='none'></option>
                {this.props.totalItems.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
                </select>
                <input type='number' id={`${this.props.id}-item0-count`} onChange={() => this.updateState('item0', 'count')}/>
                </li>
              <li>
                <select id={`${this.props.id}-item1-name`} onChange={() => this.updateState('item1', 'name')}>
                <option value='none'></option>
                {this.props.totalItems.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
                </select>
                <input type='number' id={`${this.props.id}-item1-count`} onChange={() => this.updateState('item1', 'count')}/>
                </li>
              <li><button onClick={this.submit}>Save</button></li>
            </ul>
          }
        </div>
      </div>
    );
  }
}

export default Level
