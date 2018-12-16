import React from 'react';

class GifSearch extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.search(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}


export default GifSearch;
