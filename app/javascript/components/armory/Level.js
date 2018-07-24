import React from "react"
import PropTypes from "prop-types"
class Level extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <p className='card-text'> Level {this.props.level}: </p>
        <ul>
          {
            this.props.items.map(item => <li key={item.id}> {item.name}: {item.count}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Level
