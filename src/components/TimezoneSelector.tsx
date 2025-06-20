// Reusable dropdown component for selecting a timezone.
// Accepts label, selected value, and change handler as props.
// Currently uses a static list of common timezones.

import React from 'react';

interface TimezoneSelectorProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

const timeZones = [
  'America/Vancouver',
  'America/New_York',
  'Europe/London',
  'Europe/Berlin',
  'Asia/Kolkata',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Africa/Johannesburg',
];

const TimeZoneSelector : React.FC<TimezoneSelectorProps> = ({label, value, onChange}) => {
    return (
        <div>
            <label>{label}:</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {timeZones.map((zone) => (
                    <option key={zone} value={zone}>
                        {zone}
                    </option>
                ))}

            </select>
        </div>
    );
};

export default TimeZoneSelector;