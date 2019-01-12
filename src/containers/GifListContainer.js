import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


class GifListContainer extends Component {
  state = {
    gifList: []
  }


  // fetchGiphys = (event = "airplanes") => {
  //   const SEARCH_URL = `http://api.giphy.com/v1/gifs/search?q=${event}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
  //   fetch(SEARCH_URL)
  //   .then(res => res.json())
  //   .then(giphyData => this.setState({
  //     gifList: giphyData.data
  //   }, () => console.log(giphyData))
  //   )
  // }

  fetchGiphys = (query) => {
    const SEARCH_URL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    fetch(SEARCH_URL)
    .then(res => res.json())
    .then(giphyData => this.setState({
      gifList: giphyData.data
    }, () => console.log(giphyData))
    )
  }

  componentDidMount(){
    this.fetchGiphys()
  }


  render(){
    return (
      <div>
      <GifList list={this.state.gifList}/>
      <GifSearch handleUserSearchTerm={this.fetchGiphys}/>
      </div>
    )
  }


}

export default GifListContainer;
