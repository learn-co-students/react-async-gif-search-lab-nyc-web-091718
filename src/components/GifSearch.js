import React, { Component } from 'react'
class GifSearch extends Component {

  state = {
    userInput: ''
  }


  searchTermUpdate = (event) => {
    this.setState({userInput: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleUserSearchTerm(this.state.userInput)
    console.log(this.state.userInput)
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.userInput} onChange={this.searchTermUpdate} />
          <input type="submit" value="FIND GIF" />
        </form>
      </div>
    )
  }
}

export default GifSearch;
