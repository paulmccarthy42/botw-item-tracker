import React from "react"
import PropTypes from "prop-types"
class LevelForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {items: []}

    this.addItem = this.addItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.updateCount = this.updateCount.bind(this)
    // this.updateName = this.updateName.bind(this)
  }

  addItem() {
    const newItems = this.state.items
    newItems.push({count: 0, name: ""})
    this.setState({items: newItems})
  }

  updateItem() {
    this.props.updateItem(this.props.lvl, this.state.items)
  }

  updateCount(event) {
    let newItems = this.state.items
    newItems = newItems.map(item => item.count !== 0 ? item : {count: event.target.value, name: 'poop'})
    this.setState({items: newItems})
    this.updateItem()
  }

  render () {
    const index = (item) => this.state.items.indexOf(item)

    return (
      <div>
        <div>Level {this.props.lvl}:</div>
        {
          this.state.items.map(item => 
            <div key={this.state.items[this.state.items.indexOf(item)]}>
              <input type='number' name='count' value={this.state.items[this.state.items.indexOf(item)].count} onChange={this.updateCount} />
              <input type='text' name='name' value={this.state.items[this.state.items.indexOf(item)].name} onChange={this.updateItem} />
            </div>
          )
        }
        <button onClick={this.addItem}>+</button>
      </div>
    );
  }
}

export default LevelForm
