import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5  shadow-lg'>
      <h1>Search Results</h1>
      <h1 className='pt-3 font-bold'>Brand</h1>
      <ul>
        <li>H&M</li>
        <li>Adidas</li>
        <li>Nike</li>
      </ul>
      <h1 className='pt-3 font-bold'>Price Range</h1>
      <ul className='pl-2'>
        <li>Under 500</li>
        <li>1000 To 3000</li>
      </ul>
      <h1 className='pt-3 font-bold'>Rating</h1>
      <ul>
        <li>"⭐⭐⭐⭐⭐"</li>
        <li>"⭐⭐⭐⭐"</li>
        <li>"⭐⭐⭐"</li>
        <li>"⭐⭐"</li>
      </ul>
    </div>
  )
}

export default Sidebar