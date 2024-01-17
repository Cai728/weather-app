import { useState, useEffect } from 'react'
import Image from "next/image"

const Weather = ({data, day}) => {

  useEffect(() => {
    console.log(data)
  }
  , [data])

    //data[0][0].main.temp
  return (
    <div className="flex justify-center items-start h-screen mt-24">
      <div className="w-64 h-64 border-2 border-gray-300 rounded-lg text-center bg-gray-100 bg-opacity-70">
        <div className="mb-4 flex flex-col items-center">
            <Image src={`http://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`} alt="weather description"
                width="100" height="100"/>
          <span className="block text-lg font-bold">Min: {
            data ? data[0].main.temp_min : null
          
          } °C</span>
          <span className="block text-lg font-bold">Max: {data ? data[0].main.temp_max : null} °C</span>
        </div>
        <div className="italic text-gray-500">Wind Speed: {data ? data[0].wind.speed : null} km/h</div>
        <p>Humidity: {data ? data[0].main.humidity : null}%</p>
        <p>Description: {data ? data[0].weather[0].description : null}</p>
      </div>

    </div>
  )
}



export default Weather