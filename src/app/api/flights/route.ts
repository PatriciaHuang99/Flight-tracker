import { NextResponse } from 'next/server';

const API_KEY = process.env.AVIATIONSTACK_API_KEY;
const BASE_URL = 'http://api.aviationstack.com/v1';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const flightNumber = searchParams.get('flightNumber');

    if (!flightNumber) {
        return NextResponse.json({ error: 'Flight number is required' }, { status: 400 });
    }

    if (!API_KEY) {
        return NextResponse.json({ error: 'API key is not configured' }, { status: 500 });
    }

    try {
        const response = await fetch(`${BASE_URL}/flights?access_key=${API_KEY}&flight_iata=${flightNumber}`);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch flight data' }, { status: 500 });
    }
}
