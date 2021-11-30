import React from 'react'

interface Props {
  onClick: () => void
}

const BaseButton: React.FC<Props> = (props) => {
  const { onClick } = props
  return (
    <button
      className='btn'
      onClick={onClick}
    >
      {props.children}
    </button>
  )
}

export default BaseButton
