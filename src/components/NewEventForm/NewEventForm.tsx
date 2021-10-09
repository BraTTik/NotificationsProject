import React, { useState } from 'react'
import { Row } from '../../containers'
import { TextInput } from '../TextInput'
import { Button } from '../Button'
import { makeEvent } from '../../utils/mockUtils'
import { useActions } from '../../hooks/useActions'
import './NewEventForm.scss'

export const NewEventForm = () => {
  const [eventName, setEventName] = useState('')
  const [error, setError] = useState('')
  const { addEvent } = useActions()

  const showError = () => {
    setError('Field is required')
  }

  const handleChange = (value: { name: string, value: string }) => {
    setEventName(value.value)
    error && setError('')
  }

  const handleClick = () => {
    if (!eventName) {
      showError()
      return
    }

    const event = makeEvent(new Date(), eventName)
    setEventName('')
    addEvent(event)
  }

  return (
    <div className='new-event-form'>
      <Row>
        <TextInput name='event-name' handleChange={handleChange} value={eventName} errorText={error} placeholder='Add event name...'/>
        <Button onClick={handleClick} title={'Add new event'}/>
      </Row>
    </div>
  )
}
