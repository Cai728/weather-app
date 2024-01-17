import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=${process.env.WEATHER_KEY}`)
        console.log( NextResponse.json({status:200, data: weather.data}))
        return NextResponse.json({status:200, data: weather.data})
    } catch (error) {
        console.error(error)
        return NextResponse.error()
    }
}


// import { NextResponse } from "next/server";
// import axios from "axios";

// export async function GET() {
//     console.log(process.env.WEATHER_KEY)
//     try {
//         const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.WEATHER_KEY}`)
//         console.log(weather)
//         return NextResponse.json(
//             {
//                 status: 200,
//                 body: weather.data
//             }

//         )
//     } catch (error) {
//         console.error(error)
//         return NextResponse.error()
//     }
// }
