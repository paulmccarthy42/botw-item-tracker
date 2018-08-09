import React from "react"
import PropTypes from "prop-types"
import ArmorPiece from './ArmorPiece.js'
class App extends React.Component {
  constructor(props) {
    super(props)

    console.log(this.props.player.items)
  }

  render () {
    return (
      <div>
        <h1>Hey { this.props.player.name }, listen! </h1>
        <div className='item-box'>
          <ul>
            { this.props.player.items.sort((item1, item2) => item1 > item2)
              .map(item => (
                <li>
                  {item}: {this.props.player.currently_searching_for[item]} <input type='number' /> <input type='checkbox' />
                </li>
              )
            )}
          </ul>
        </div>

        {
          this.props.player.armor.map(piece => {
            return <ArmorPiece id={piece.id} piece={piece.name} level={piece.level} key={piece.id} />
          })
        }
      </div>
      );
  }
}

App.propTypes = {
  player: PropTypes.object.isRequired
}

export default App
