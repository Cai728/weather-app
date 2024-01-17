import { useState, useEffect } from 'react'
import Image from "next/image"

const Weather = ({data, date}) => {
  // Your date in YYYY-MM-DD format
  var dateString = date;

  // Split the date string into year, month, and day components
  var dateComponents = dateString.split('-');
  var year = parseInt(dateComponents[0]);
  var month = parseInt(dateComponents[1]) - 1; // Months in JavaScript are 0-indexed
  var day = parseInt(dateComponents[2]);

  // Create a new Date object using the components
  var convertedDate = new Date(year, month, day);
  const printDate = day + "/" + (month+1) + "/" + year

  // Now you can use the Date object methods, such as getDay()
  var dayOfWeek = convertedDate.getDay();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayOfWeek = daysOfWeek[dayOfWeek];
  console.log('Day of the week:', currentDayOfWeek); // 1 (for Monday) in this example

  // useEffect(() => {
  //   console.log(data)
  //   console.log("date:", date)
  // }, [data])

  return (
    <div className="flex justify-center items-start h-screen mt-24">
      <div className="w-64 border-2 border-gray-300 rounded-lg text-center bg-gray-100 bg-opacity-70">
        <div className="flex flex-col items-center">
          <h1>{currentDayOfWeek}</h1>
          <p>{printDate}</p>
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