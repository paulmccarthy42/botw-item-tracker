import React from "react"
import PropTypes from "prop-types"
import Level from "./Level"

class ArmorCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className='card' style={{width: '18rem'}}>
        <div className='card-body'>
          <h5 className='card-title'>{this.props.name} </h5>
            {
              this.props.levels.map(level => <Level key={level.id} level={level.level} items={level.level_up_items} />)
            }
          <a href="#" className="card-link">Edit</a>
          <a href="#" className="card-link">Delete</a>
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
