import React from 'react'


function FeaturedBrewsCollection ({brew}) {
    const image = brew?.images[0]


    return (
        <div className='thumbnail'>

        <img className="thumbnail-image" src={image?.img_url}
        alt="" />
         <div className='thumbnail-details'>
              <h2>{brew.title}</h2>
              {/* <p>$ {brew.price}</p> */}
            </div>

      </div>
    )
}

export default FeaturedBrewsCollection;
