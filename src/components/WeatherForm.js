import React, { useContext, useState } from 'react'
import { WeatherContext } from './WeatherContainer'

const WeatherForm = () => {
    const {setCity} = useContext(WeatherContext)
    const [cityForm, setCityForm] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setCity(cityForm)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={cityForm} onChange={(e)=>{setCityForm(e.target.value)}}/>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default WeatherForm