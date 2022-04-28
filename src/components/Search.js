import React, { useState } from 'react'

const Search = ({ onSearch }) => {
  const [searchTerm, setTerm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-xs-12'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                id='term'
                placeholder='Search video'
                value={searchTerm}
                   onChange={(e) => setTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
