// Simple presentation component to display a timezone's name and current time.
// Takes `title` and `time` as props.
// Styled for readability and can be reused multiple times.

import React from 'react';

interface ClockDisplayProps {
  title: string;
  time: string;
}

const ClockDisplay: React.FC<ClockDisplayProps> = ({title, time}) => {
    return (
        <div style={{ margin: '1rem 0' }}>
            <h3>{title}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{time}</p>

        </div>
    )
}

export default ClockDisplay;