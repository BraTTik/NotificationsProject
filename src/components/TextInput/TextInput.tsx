import React, { ChangeEvent, FC } from 'react'
import classnames from 'classnames'
import './TextInput.scss'

type TextInputProps = {
  handleChange: (value: {name: string, value: string }, event: ChangeEvent<HTMLInputElement>) => void
  value: string | number
  name: string
  className?: string
  errorText?: string
}

export const TextInput: FC<TextInputProps & React.HTMLProps<HTMLInputElement>> =
  (
    props
  ) => {

  const { value, handleChange, className, errorText } = props

  const isError = !!errorText

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange({
      name: event.target.name || 'name',
      value: event.target.value
    }, event)
  }

  const classes = classnames('text-input', className, { 'is-error': isError })
  return (
    <div className={classes}>
      <input
        { ...props }
        type='text'
        value={value}
        onChange={onChange}
        className='text-input__field'
      />
      <div className='text-input__error'>{ errorText }</div>
    </div>

  )
}

