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
            item1Name: undefined,
            item2Count: 0,
            item2Name: undefined
          }
        },
        {
          2: {
            item1Count: 0,
            item1Name: undefined,
            item2Count: 0,
            item2Name: undefined
          }
        },
        {
          3: {
            item1Count: 0,
            item1Name: undefined,
            item2Count: 0,
            item2Name: undefined
          }
        },
        {
          4: {
            item1Count: 0,
            item1Name: undefined,
            item2Count: 0,
            item2Name: undefined
          }
        }
      ]
    }
  }

  handleCheckmarking() {
    this.setState({upgradeable: !this.state.upgradeable})
  }

  handleChange(attribute) {
    let newLevels = this.state.levels
    let level = parseInt() // this will always grab #1, but checking out levelNum will always grab 4
    console.log(newLevels)
    console.log(level)
    newLevels[level - 1][level][attribute] = document.getElementById(attribute).value
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
                  return <div key={levelNum} className='header' id={levelNum}>
                    <div>Level {levelNum}</div>
                    <div>
                      <input 
                        type='number'
                        value={levelStats.item1Count}
                        className={levelNum}
                        onChange={() => this.handleChange('item1Count')}
                      />
                      <input 
                        type='text'
                        value={levelStats.item1Name}
                        className={levelNum}
                        onChange={() => this.handleChange('item1Name')}
                      />
                    </div>
                    <div>
                      <input 
                          type='number'
                          value={levelStats.item2Count}
                          className={levelNum}
                          onChange={() => this.handleChange('item2Count')}
                        />
                      <input 
                        type='text'
                        value={levelStats.item2Name}
                        className={levelNum}
                        onChange={() => this.handleChange('item2Name')}
                      />
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
