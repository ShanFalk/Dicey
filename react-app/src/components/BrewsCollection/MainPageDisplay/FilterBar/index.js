import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './FilterBar.css'

function FilterBar({brews}) {
    const tags = Object.values(useSelector(state => state.tags))
    

    

    const filterResults = (filterBy) => {
        // brews.filter(brew => brew.title.toLowerCase().includes(filterBy.toLowerCase()) || brew.description.toLowerCase().includes(filterBy.toLowerCase()))
    }
    
  return (
    <div className='filter-block'>
        <div className='filter-bar-icons'>
        {tags.map(tag => {
            let content = (<i class="fa-solid fa-spinner"></i>);
            if (tag.name === "Western") content = (<i class="fa-solid fa-hat-cowboy-side"></i>)
            if (tag.name === "Regency") content = (<i class="fa-solid fa-crown"></i>)
            if (tag.name === "Medieval") content = (<i class="fa-brands fa-fort-awesome"></i>)

            return (
                <div className='icon-block'>
                    <button className='filter-icon-button purple' type= "button" aria-hidden="false" aria-pressed="true" onClick={() => filterResults(tag.name)}>
                        <span className='filter-icon'>{content}</span>
                        <span className='filter-name'>{tag.name}</span>
                    </button>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default FilterBar
