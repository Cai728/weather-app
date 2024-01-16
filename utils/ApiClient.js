import axios from "axios";

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
        const data = await this.getWeather("London")
        console.log(data)
    }

    async getWeather(city) {
        try {
            const response = await this.getRequest(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`)
            return response.data
        } catch (error) {
            console.error(error)    
        }
       
        // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}` //5 day weather forecast

        }
    
    // getDailyWeather(day) {

    // }
}

