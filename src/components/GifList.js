import React from 'react'

const GifList = (props) => {

console.log(props)


  return (

        <ul>
          <li>
            {props.list.map(gif => <img key={gif.id} src={gif.images.original.url} alt="gif-image" /> )}
          </li>
        </ul>
  )
}

export default GifList;
