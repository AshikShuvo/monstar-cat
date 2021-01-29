import React from 'react'
import "./SearchBox.style.css"
const SearchBox = ({placeHolder,searchHandler}) => {
    return (
        <input 
          className="search"
          type="search"
          placeholder={placeHolder}
          onChange={searchHandler}
        />
    )
}

export default SearchBox
