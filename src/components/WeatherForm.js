import React, { useContext, useState } from 'react'
import { WeatherContext } from './WeatherContainer'
import styles from './WeatherInfo.module.css'

const WeatherForm = () => {
    const {setCity} = useContext(WeatherContext)
    const [cityForm, setCityForm] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setCity(cityForm)
    }

  return (
        <form onSubmit={handleSubmit} className={styles.center}>
            <input type="text" value={cityForm} onChange={(e)=>{setCityForm(e.target.value)}} className={styles.textInput}/>
            <input type="submit" value='Enviar' className={styles.btn}/>
        </form>
  )
}

export default WeatherForm