import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './FilterBar.css'

function FilterBar({brews}) {
    const tags = Object.values(useSelector(state => state.tags))
    
    return (
    <div className='filter-block' >
        <div className='filter-bar-icons'>
        {tags.map(tag => {
            let content = (<i className="fa-solid fa-spinner"></i>);
            if (tag.name === "Western") content = (<i className="fa-solid fa-hat-cowboy-side"></i>)
            if (tag.name === "Regency") content = (<i className="fa-solid fa-crown"></i>)
            if (tag.name === "Medieval") content = (<i className="fa-brands fa-fort-awesome"></i>)
            if (tag.name === "Science Fantasy") content = (<i className="fa-solid fa-flask"></i>)
            if (tag.name === "Noir") content = (<i className="fa-solid fa-user-secret"></i>)
            if (tag.name === "Horror") content = (<i className="fa-solid fa-ghost" ></i>)
            if (tag.name === "Funny") content = (<i className="fa-solid fa-face-laugh-squint"></i>)
            if (tag.name === "JRPG") content = (<i className="fa-solid fa-people-group"></i>)
            
            return (
                <div className='icon-block' key={tag.id}>
                    <Link className='filter-icon-button purple' to={`/search?term=${tag.name}&tagId=${tag.id}`}>
                        <span className='filter-icon'>{content}</span>
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
