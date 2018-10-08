import React from 'react'

export default class Field extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({clicked: true})
    this.props.ifFieldClicked();
  }

  render() {
    return (
        <button className='field' key={this.props.index} onClick={this.handleClick} disabled={this.state.clicked}>{this.props.content}</button>
    )
  }
}