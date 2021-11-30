import React from 'react'

const HomeContainer: React.FC = (props) => {
  return (
    <div className='home-container'>
      {props.children}
    </div>
  )
}

export default HomeContainer
