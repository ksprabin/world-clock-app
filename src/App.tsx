// Main React component that controls the entire application.
// It manages state for selected timezones, current times, and time difference.
// Also handles API polling and error management.

import { useEffect, useState } from 'react';
import './App.css';
import TimezoneSelector from './components/TimezoneSelector';
import ClockDisplay from './components/ClockDisplay';
import { fetchTime } from './services/timeApi';
import type { TimeAPIResponse } from './types/time';
import { calculateTimeDifference } from './utils/timeUtils'

const DEFAULT_LOCAL = 'America/Vancouver';
const DEFAULT_COMPARE = 'Europe/London';

function App() {
  const [localZone, setLocalZone] = useState(DEFAULT_LOCAL);
  const [compareZone, setCompareZone] = useState(DEFAULT_COMPARE);
  const [localTime, setLocalTime] = useState('');
  const [compareTime, setCompareTime] = useState('');
  const [timeDiff, setTimeDiff] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [shouldPoll, setShouldPoll] = useState(true); // Control the polling when error occurs

  const updateTimes = async () => {
    try {
      setError(null); // Clear old errors
      const [local, compare]: [TimeAPIResponse, TimeAPIResponse] = await Promise.all([
        fetchTime(localZone),
        fetchTime(compareZone),
      ]);

      setLocalTime(local.time + ':' + local.seconds);
      //console.log('local.time: ' + local.time);
      setCompareTime(compare.time + ':' + compare.seconds);

      setTimeDiff(calculateTimeDifference(local.time, compare.time));
    } catch (err) { //Error handling
      console.error('Failed to fetch time:', err);
      setError('Unable to fetch time data. Please try again later!');
      setShouldPoll(false); // Stop the interval
    }
  };

  useEffect(() => {
    if (!shouldPoll) return;

    updateTimes(); // run immediately
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [localZone, compareZone, shouldPoll]);

  return (
    <div className="App">
      <h1>World Clock</h1>

      <div className="dropdowns">
        <TimezoneSelector label="Your Time Zone" value={localZone} onChange={setLocalZone} />
        <TimezoneSelector label="Compare With" value={compareZone} onChange={setCompareZone} />
      </div>

      {/* Error Message UI */}
      {error && ( 
        <>
        <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>
        <button onClick={() => { setError(null); setShouldPoll(true); }}>
          Retry
        </button>
        </>
      )
      }

      <ClockDisplay title={localZone} time={localTime} />
      <ClockDisplay title={compareZone} time={compareTime} />

      <h2>Time Difference: {timeDiff}</h2>
    </div>
  );
};

export default App;
