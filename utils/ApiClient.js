import axios from "axios";
import { GET } from "../app/api/weather/route";

export class ApiClient {
    
    responseStatusCheck(responseObject) {
        if (responseObject.status >= 200 && responseObject.status < 300) {
        return Promise.resolve(responseObject)
        } else {
            return Promise.reject(new Error(responseObject.statusText))
        }
    }
    getRequest(url) {
        return axios.get(url).then(this.responseStatusCheck).catch((err) => {
            console.error(err);
        })
    }

    async checkWorking() {
        const data = await this.getFiveDayForecast("London")
        // console.log(data)
    }

    async getWeather(city) {
        try {
            const response = await this.getRequest("/api/weather")
            return response;
        } catch (error) {
            console.error(error)    
        }
       
        // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}` //5 day weather forecast

    }
    
    async getFiveDayForecast(city) {
        try {
            const response = await this.getRequest("/api/weather");
            // Organize the data into arrays for each day
            const dailyForecasts = {};
            // Loop through each forecast entry with an interval of 8 (3 hours * 8 = 24 hours)
            for (let i = 0; i < response.data.data.list.length; i += 8) {
                const entry = response.data.data.list[i];
                // Extract the date without the time
                const date = entry.dt_txt.split(' ')[0];
                // Check if the date is already a key in the dailyForecasts object
                if (!dailyForecasts[date]) {
                    // If not, create an array for that date
                    dailyForecasts[date] = [];
                }
                // Add the forecast entry to the array for that date
                dailyForecasts[date].push(entry);
            }
            return dailyForecasts;
        } catch (error) {
            console.error(error);
        }
    }
}

