import React, { useState } from 'react'
import "./Home.scss"
import { HomeTable } from '../../interfaces';

const Home = () => {
  const [lists, setLists] = useState<any[]>([1,1,1,1,1,1,1,1])

  return (
    <div className='home'>
      <div className='headers'>
        <div className='card'>
          <span className='title'>Subject</span>
          <span className='data'>10</span>
        </div>
        <div className='card'>
          <span className='title'>Pending</span>
          <span className='data'>8</span>
        </div>
        <div className='card'>
          <span className='title'>Accomplished</span>
          <span className='data'>2</span>
        </div>
      </div>
      <div className='header-table'>
        <span>Subject</span>
        <span>Target Amount</span>
        <span>Target Date</span>
        <span>Status</span>
      </div>
      <div className='data-table scroll'>
        {lists.map((list, i) => (
          <div className={i % 2 === 0 ? 'lists even' : 'lists'}>
            <span>Car</span>
            <span>₱ 2000000</span>
            <span>Jan 12, 2030</span>
            <span>Pending</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
