import React from 'react'

interface Props {
  rows?: number
  label: string
  value: string
  messageError: string
  onChange: (value: string) => void
}

const BaseTextarea: React.FC<Props> = (props) => {
  const { label, rows, value, messageError, onChange } = props

  const getLabelStyles = (): string => {
    if (messageError) return `input-label error`
    else return `input-label`
  }

  return (
    <div className='input-container'>
      <label className={getLabelStyles()}>
        {messageError ? messageError : label}
      </label>
      <textarea
        value={value}
        rows={rows || 4}
        className='input-style'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default BaseTextarea
