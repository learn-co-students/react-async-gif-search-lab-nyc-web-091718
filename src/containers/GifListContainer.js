import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  fetchGifs = (term) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(gifData => {
      this.setState({ gifs: gifData.data.map(g => ({ url: g.images.original.url })) })
    })
  }

  componentDidMount() {
    this.fetchGifs('flatiron')
  }

  render() {
    return (
      <div>
        <GifSearch search={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;
