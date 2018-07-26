import React from "react"
import PropTypes from "prop-types"
import LevelForm from "./LevelForm"

class ArmorForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      upgradeable: false,
      levels: [
        {
          level1: {
            item1Count: 0,
            item1Name: null,
            item2Count: 0,
            item2Name: null
          }
        },
        {
          level2: {
            item1Count: 0,
            item1Name: null,
            item2Count: 0,
            item2Name: null
          }
        },
        {
          level3: {
            item1Count: 0,
            item1Name: null,
            item2Count: 0,
            item2Name: null
          }
        },
        {
          level4: {
            item1Count: 0,
            item1Name: null,
            item2Count: 0,
            item2Name: null
          }
        }
      ]
    }
  }

  handleCheckmarking() {
    this.setState({upgradeable: !this.state.upgradeable})
  }

  updateItem(level, items) {
    const newLevels = this.state.levels
    newLevels[level - 1].items = items
    this.setState({levels: newLevels})
  }

  submit() {
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <input type="text" name="name" placeholder="Enter armor name" value={this.state.title} />
        <br /> Can be upgraded? 
        <input type="checkbox" name="upgradeable" checked={this.state.upgradeable} onChange={this.handleCheckmarking.bind(this)} />
        {
          this.state.upgradeable && 
          <div className='level-data'>
            { 
              this.state.levels.map(
                level => <LevelForm 
                  key={level.level} 
                  lvl={level.level} 
                  items={level.items} 
                  updateItem={this.updateItem.bind(this)}
                />
              )
            }
          </div>
        }
        <button onClick={this.submit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default ArmorForm
