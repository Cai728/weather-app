'use client'

import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaBeer } from "react-icons/fa"; //Was not sure how to get react-icons to work
import Weather from '@/components/Weather';
import { ApiClient } from '../utils/ApiClient';

export default function Home() {
  const apiClient = new ApiClient();

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}` //Current weather
  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}` //5 day weather forecast
  
  

  // const fetchWeather = (e) => { //(e) = event
  //   e.preventDefault()
  //   setLoading(true)
  //   axios.get(url).then((response) => {
  //     setWeather(response.data)
  //     console.log(response.data)
  //   })
  //   setCity('')
  //   setLoading(false)
  // }

  const fetchWeather = (e) => { //(e) = event
    e.preventDefault()
    setLoading(true)
    setWeather(apiClient.getWeather(city));
    setCity('')
    setLoading(false)
  }

  return (
    <main className="">
      {/* <image src="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      layout='fill' //Could not get the background image to work
      /> */} 

        {/* The div below can be used for tailwind overlay*/}
        <div>
        </div>
        
      <button onClick={()=>apiClient.checkWorking("London")}>Click me</button>

        {/* Search */}
    <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 z-10'>
      <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-blue-600 rounded-2xl'>
        <div>
          <input 
          onChange={(e)=> setCity(e.target.value)}
          className='bg-transparent border-none text-blue-500 focus:outline-none text-2xl' type='text' placeholder='Search City' />
        </div>
        <button onClick={fetchWeather}>Search</button> {/* Could add react icons to search button */}
      </form>
    </div>

    <Weather/>
    </main>
  )
}
