import React from 'react'
import { OptionType } from '../type/OptionType'

interface Props {
  label: string
  value: string
  options: OptionType[]
  messageError: string
  onChange: (value: string) => void
}

const BaseSelect: React.FC<Props> = (props) => {
  const { label, value, options, messageError, onChange } = props

  const getLabelStyles = (): string => {
    if (messageError) return `input-label error`
    else return `input-label`
  }

  return (
    <div className='input-container'>
      <label className={getLabelStyles()}>
        {messageError ? messageError : label}
      </label>
      <select
        value={value}
        className='input-style'
        onChange={(e) => onChange(e.target.value)}
      >
        {options?.map((item, index) => (
          <option key={index} value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  )
}

export default BaseSelect
