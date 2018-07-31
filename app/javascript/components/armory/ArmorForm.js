import React from "react"
import PropTypes from "prop-types"

class ArmorForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      upgradeable: false,
      levels: [
        {
          1: {
            item1Count: 0,
            item1Name: 'banana',
            item2Count: 0,
            item2Name: 'banana'
          }
        },
        {
          2: {
            item1Count: 0,
            item1Name: 'banana',
            item2Count: 0,
            item2Name: 'banana'
          }
        },
        {
          3: {
            item1Count: 0,
            item1Name: 'banana',
            item2Count: 0,
            item2Name: 'banana'
          }
        },
        {
          4: {
            item1Count: 0,
            item1Name: 'banana',
            item2Count: 0,
            item2Name: 'banana'
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
    console.log(this.state.levels)
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
                level => { 
                  const levelNum = Object.keys(level)[0];
                  const levelStats = Object.values(level)[0];
                  return <div key={levelNum}>
                    <div>Level {levelNum}</div>
                    <div>
                      <input type='number' value={levelStats.item1Count}/><span></span>
                      <input type='text' value={levelStats.item1Name}/>
                    </div>
                    <div>
                      <input type='number' value={levelStats.item2Count}/>
                      <input type='text' value={levelStats.item2Name}/>
                    </div>
                  </div>
                }
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
