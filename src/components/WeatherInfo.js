import React from 'react'
import WeatherForm from './WeatherForm'
import styles from './WeatherInfo.module.css'

const WeatherInfo = ({weather}) => {

    const time = weather.location.localtime.split(' ').slice(1,3)

  return (
    <>
        <WeatherForm/>
        <div className={styles.location}>
            <h1>{weather.location.name}</h1>
            <div>
                <p>{weather.location.region}</p>
                <p>{time}</p>
            </div>
        </div>
        <div className={styles.mainInfo}>
            <img src={weather.current.condition.icon} alt="" />
            <p><span>{weather.current.condition.text}</span></p>
            <p><span>{weather.current.temp_c}°</span></p>
        </div>
        <div className={styles.mainInfo}>
            <p><span>Wind:</span> {weather.current.wind_kph}kph</p>
            <p><span>Humidity:</span> {weather.current.humidity}</p>
            <p><span>UV:</span> {weather.current.uv}</p>
        </div>
        <div className={styles.center}>
            <iframe
            title='map' 
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51813.16744126409!2d${weather?.location.lon}5!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1659887591444!5m2!1ses-419!2sar`}
            width="300px" 
            height="250px" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">            
            </iframe>
        </div>
    </>
  )
}

export default WeatherInfo