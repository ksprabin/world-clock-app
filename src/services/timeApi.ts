// Service function to fetch the current time for a given timezone
// using the timeapi.io API.
// Returns a typed response (TimeApiResponse) and throws an error if fetch fails.

import type { TimeAPIResponse } from '../types/time';

const base_URL = import.meta.env.VITE_TIME_API_URL;
//console.log('base_URL: ' + base_URL)

export const fetchTime = async (timeZone:string) => {
    const response = await fetch(`${base_URL}?timeZone=${timeZone}`);

    if(!response.ok){
        throw new Error(`Failed to fetch time for ${timeZone}`);
    }

    const data = await response.json();
    return data as TimeAPIResponse;
}