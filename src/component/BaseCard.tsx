import React from 'react'

interface Props {
  title: string
}

const BaseCard: React.FC<Props> = (props) => {
  return (
    <div className='card-container'>
      <div className='card-content'>
        <h1 className='card-title'>{props.title}</h1>
        {props.children}
      </div>
    </div>
  )
}

export default BaseCard
