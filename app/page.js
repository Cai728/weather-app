"use client";
import { useState, useEffect } from 'react';
import { ApiClient } from '../utils/ApiClient';
import Weather from '@/components/Weather';

export default function Home() {
  const apiClient = new ApiClient();

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    //e.preventDefault();
    setLoading(true);

    try {
      const weatherData = await apiClient.getFiveDayForecast(city);

      let temp = [];

      Object.keys(weatherData).forEach((key) => {
        temp.push({
          date: key,
          data: weatherData[key],
        });
      });

      setWeather(temp);
    } catch (error) {
      console.log("Error fetching weather:", error);
    }

    setCity('');
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);


  return (
    <main className="">
      {/* Your background image code here */}

      <div>
        {/* Tailwind overlay div */}
      </div>

      {/* Search */}
      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 z-10'>
        <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-blue-600 rounded-2xl'>
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className='bg-transparent border-none text-blue-500 focus:outline-none text-2xl'
              type='text'
              placeholder='Search City'
            />
          </div>
          <button type="submit" className="text-white"> Search</button>
        </form>
      </div>


      {
        weather && weather.map((
          day,
          index
        ) => {
          return <Weather
            key={index}
            date={day.date}
            data={day.data}
          />
        })
      }
    </main>
  );
}
