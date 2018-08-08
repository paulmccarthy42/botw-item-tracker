import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

import Level from "./Level"

class ArmorCard extends React.Component {
  constructor(props) {
    super(props)

    this.handlePiece = this.handlePiece.bind(this)

    this.state = {
      owned: this.props.owned
    }
  }

  handlePiece (id) {
    this.setState({owned: !this.state.owned})
    axios.post('http://localhost:3000/players/piece_manager',
      {
        id: id,
        owned: this.state.owned
      }
    )
  }

  render () {
    return (
      <div className='card' style={{width: '22rem'}}>
        <div className='card-body'>
          <h5 className='card-title'>
            {this.props.name} 
            <input 
              type='checkbox'
              checked={this.state.owned} 
              onChange={() => this.handlePiece(this.props.id)}
            />
          </h5>
          {
            this.props.levels.map(
              level => (
                <Level 
                  key={level.id}
                  id={level.id}
                  level={level.level} 
                  items={level.level_up_items} 
                  totalItems={this.props.items}/>
              )
            )
          }
        </div>
      </div>
    );
  }
}

ArmorCard.propTypes = {
  name: PropTypes.string.isRequired,
  levels: PropTypes.array.isRequired,
}

export default ArmorCard
