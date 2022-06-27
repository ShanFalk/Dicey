import React from 'react'

function BrewCard({brew}) {

    return (
    <div className='card-block'>
      <img src={brew?.img_url}
      alt="" /> 
        <div className='card-info'>
            <h2>{brew?.title}</h2>
            <p>${brew?.price}</p>
        </div>
    </div>
  )
}

export default BrewCard
