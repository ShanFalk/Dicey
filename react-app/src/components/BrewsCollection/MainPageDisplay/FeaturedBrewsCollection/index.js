import React from 'react'
import './FeaturedBrew.css'


function FeaturedBrewsCollection ({brew}) {
    const image = brew?.images[0]

    //console.log(image)

    return (
        <div className='card-block'>
        <img className="brew-image" src={image?.img_url}
        alt="" /> 
          <div className='card-info'>
              <h2>{brew.title}</h2>
              <p>$ {brew.price}</p>
              
          </div>
      </div>
    )
}

export default FeaturedBrewsCollection;
