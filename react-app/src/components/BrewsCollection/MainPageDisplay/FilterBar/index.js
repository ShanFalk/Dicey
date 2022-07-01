import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './FilterBar.css'

function FilterBar({brews}) {
    const tags = Object.values(useSelector(state => state.tags))
    let random = new Set()
    while (random.size < 5) {
        if (!random.has(Math.floor(Math.random() * 8) + 1)) random.add(Math.floor(Math.random() * 9) + 1) 
    }

    const display = tags.filter(tag => random.has(tag.id))

    const tagImages = {
        "Horror" :'https://myawstestpython.s3.amazonaws.com/seeder-tag-images/horror.png',
        "Science-Fantasy" :'https://myawstestpython.s3.amazonaws.com/seeder-tag-images/science-fantasy.png',
        "Funny" :'https://myawstestpython.s3.amazonaws.com/seeder-tag-images/funny.png',
        "JRPG" :'https://myawstestpython.s3.amazonaws.com/seeder-tag-images/jrpg.png',
        "Medieval" :'https://myawstestpython.s3.amazonaws.com/seeder-tag-images/medieval.png',
        "Fantasy" :'https://myawstestpython.s3.amazonaws.com/seeder-tag-images/fantasy.png',
        "Western": 'https://myawstestpython.s3.amazonaws.com/seeder-tag-images/western.png',
        "Regency": 'https://myawstestpython.s3.amazonaws.com/seeder-tag-images/regencyy.png',
        "Noir": 'https://myawstestpython.s3.amazonaws.com/seeder-tag-images/noir.png',
    }




    return (
    <div className='filter-block' >
        <div className='filter-bar-icons'>
        {display.map(tag => {
            return (
                <div className='icon-block' key={tag.id}>
                    <Link className='filter-icon-button' key={tag.id} to={`/search?term=${tag.name}&tagId=${tag.id}`}>
                        <span ><img className='profile-image' alt="" src={tagImages[tag.name]} /></span>
                        <span className='filter-name'>{tag.name}</span>
                    </Link>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default FilterBar


            // let content = (<i className="fa-solid fa-spinner"></i>);
            // tag.name === "Western" && tagNames["tag.name"] content = (<i className="fa-solid fa-hat-cowboy-side"></i>)
            // if (tag.name === "") content = (<i className="fa-solid fa-crown"></i>)
            // if (tag.name === "") content = (<i className="fa-brands fa-fort-awesome"></i>)
            // if (tag.name === "") content = (<i className="fa-solid fa-flask"></i>)
            // if (tag.name === "") content = (<i className="fa-solid fa-user-secret"></i>)
            // if (tag.name === "") content = (<i className="fa-solid fa-ghost" ></i>)
            // if (tag.name === "") content = (<i className="fa-solid fa-face-laugh-squint"></i>)
            // if (tag.name === "") content = (<i className="fa-solid fa-people-group"></i>)
