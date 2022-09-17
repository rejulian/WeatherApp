import React from 'react'
import {useState, useEffect} from 'react'
import WeatherInfo from './WeatherInfo'
import { createContext } from "react";

export const WeatherContext = createContext()

const WeatherContainer = () => {

    const API_KEY = '102035a326864069975152821221709'
    const [city, setCity] = useState('San Nicolas de los Arroyos')
    const [weather, setWeather] = useState({})
    const [isLoading, setIsLoading] = useState(true)



    useEffect(()=>{
        fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
        .then(res=>res.json())
        .then(data=> {
            setWeather(data)
            setIsLoading(false)
        })
    },[city])

  return (
    <div>
        {isLoading ? <div className="lds-dual-ring"></div> : <WeatherContext.Provider value={{setCity}}><WeatherInfo weather={weather}></WeatherInfo></WeatherContext.Provider>}
    </div>
  )
}

export default WeatherContainer