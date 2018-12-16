import React from 'react';

const GifList = ({gifs}) => {

  return (
      <ul>
        {gifs.map(g => <li><img key={g.url} src={g.url} alt={g.url}/></li>)}
      </ul>
  )
}

export default GifList;
