import React from 'react'

const SearchItem = ({setSearch,search}) => {
  return (
  <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
     <label htmlFor='search'>Search</label>
     <input 
       id = 'search'
       type='text'
       role='searchbox'
       placeholder='Search Lists'
       value = {search}
       onChange={(e)=>setSearch(e.target.value)}
    />
  </form>
  )
}

export default SearchItem