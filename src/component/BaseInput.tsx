import React from 'react'

interface Props {
  type: 'text' | 'number' | 'datetime-local'
  label: string
  value: string | number
  messageError: string
  onChange: (value: string) => void
}

const BaseInput: React.FC<Props> = (props) => {
  const { type, label, value, messageError, onChange } = props

  const getLabelStyles = (): string => {
    if (messageError) return `input-label error`
    else return `input-label`
  }

  return (
    <div className='input-container'>
      <label className={getLabelStyles()}>
        {messageError ? messageError : label}
      </label>
      <input
        type={type}
        value={value}
        className='input-style'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default BaseInput
