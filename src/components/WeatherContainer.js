import React from 'react'
import {useState, useEffect} from 'react'
import WeatherInfo from './WeatherInfo'
import { createContext } from "react";
import styles from './WeatherInfo.module.css'

export const WeatherContext = createContext()

const WeatherContainer = () => {

    const API_KEY = '45c8a34135274ff0b6f214109222610'
    const [city, setCity] = useState('San Nicolas de los Arroyos')
    const [weather, setWeather] = useState({})
    const [isLoading, setIsLoading] = useState(true)



    useEffect(()=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
        .then(res=>res.json())
        .then(data=> {
            setWeather(data)
            setIsLoading(false)
        })
    },[city])

  return (
    <div className={styles.container}>
        {isLoading ? <div className="lds-dual-ring"></div> : <WeatherContext.Provider value={{setCity}}><WeatherInfo weather={weather}></WeatherInfo></WeatherContext.Provider>}
    </div>
  )
}

export default WeatherContainer