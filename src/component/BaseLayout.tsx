import React from 'react'

const BaseLayout: React.FC = (props) => {
  return (
    <div className='layout-container'>
      <div className='layout-content'>
        {props.children}
      </div>
    </div>
  )
}

export default BaseLayout
