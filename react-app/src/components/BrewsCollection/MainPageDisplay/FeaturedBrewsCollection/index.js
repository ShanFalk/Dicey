import React from 'react'


function FeaturedBrewsCollection ({brew}) {
    //const image = brew?.images[0]

    return (
        <div className='card-block'>
        <h3>This is the BrewsColComponents - Main Page Display - FeaturedBrewsCollection</h3>
        {/* <img className="brew-image" src={image?.img_url}
        alt="" />  */}
          <div className='card-info'>
              <h2>{brew.title}</h2>
              <p>$ {brew.price}</p>
              
          </div>
      </div>
    )
}

export default FeaturedBrewsCollection;
