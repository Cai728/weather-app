import React from 'react'

const Weather = () => {

  return (
    <div className="flex justify-center items-start h-screen mt-24">
      <div className="w-64 h-64 p-6 border-2 border-gray-300 rounded-lg text-center bg-gray-100 bg-opacity-70">
        <div className="mb-4">
          <span className="block text-lg font-bold pt-6">Min: 10°C</span>
          <span className="block text-lg font-bold">Max: 20°C</span>
        </div>
        <div className="italic text-gray-500">Wind Speed: 15 km/h</div>
        <p>Humidity: 70%</p>
        <p>Description: Sunny</p>
      </div>

    </div>
  )
}



export default Weather