import React from "react"
import PropTypes from "prop-types"
class Level extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div style={{clear: 'left'}}>
        <div style={{float: 'left'}}>
          <p className='card-text'> Level {this.props.level}: </p>
        </div>
        <div style={{float: 'left'}}>
          <ul>
            {
              this.props.items.map(item => <li key={item.id}> {item.name}: {item.count}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Level
