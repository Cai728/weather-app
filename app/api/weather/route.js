import { NextResponse } from "next/server";

export async function GET() {
    try {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`)
        return NextResponse.json({data: weather, key:NEXT_PUBLIC_WEATHER_KEY})
    } catch (error) {
        console.error(error)
    }
}