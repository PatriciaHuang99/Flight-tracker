import { Flight } from './mockData';

export async function fetchFlights(flightNumber: string): Promise<Flight[]> {
    try {
        const response = await fetch(`/api/flights?flightNumber=${flightNumber}`);
        const data = await response.json();
        console.log('Raw AviationStack Data (via Proxy):', data);

        if (!data || !data.data) {
            console.error('AviationStack API Error:', data);
            return [];
        }

        return data.data.map((item: any, index: number) => ({
            id: `${item.flight.iata}-${index}`,
            flightNumber: item.flight.iata || item.flight.icao || 'N/A',
            airline: item.airline.name || 'Unknown Airline',
            startLocation: item.departure.iata || item.departure.airport || 'N/A',
            endLocation: item.arrival.iata || item.arrival.airport || 'N/A',
            startTime: item.departure.scheduled || '',
            endTime: item.arrival.scheduled || '',
            startTimeZone: item.departure.timezone || '',
            endTimeZone: item.arrival.timezone || '',
            status: mapStatus(item.flight_status),
            duration: item.flight_duration ? `${Math.floor(item.flight_duration / 60)}h ${item.flight_duration % 60}m` : undefined,
            gate: item.departure.gate || undefined,
        }));
    } catch (error) {
        console.error('Fetch Error:', error);
        return [];
    }
}

function mapStatus(apiStatus: string): Flight['status'] {
    switch (apiStatus) {
        // scheduled, active, landed, cancelled, incident, diverted
        case 'scheduled': return 'Scheduled';
        case 'active': return 'On Time';
        case 'landed': return 'On Time';
        case 'cancelled': return 'Cancelled';
        default: return 'Scheduled';
    }
}
