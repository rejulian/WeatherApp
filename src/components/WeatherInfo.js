import React from 'react'
import WeatherForm from './WeatherForm'

const WeatherInfo = ({weather}) => {

  return (
    <div>
        <WeatherForm/>
        <div>
            <h1>{weather.location.name}</h1>
            <h2>{weather.location.region}</h2>
        </div>
        <div>
            <p>Current: {weather.current.temp_c}°</p>
            <p>Feels Like: {weather.current.feelslike_c}</p>
        </div>
        <div>
            <p>Wind: {weather.current.wind_kph}kph</p>
            <p>Humidity: {weather.current.humidity}</p>
            <p>UV: {weather.current.uv}</p>
        </div>
        <div>
            <img src={weather.current.condition.icon} alt="" />
            <p>{weather.current.condition.text}</p>
        </div>
    </div>
  )
}

export default WeatherInfo