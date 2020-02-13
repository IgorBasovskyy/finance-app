import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const RateFilters = () => {
  return (
    <div>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton value={1}>Today</ToggleButton>
        <ToggleButton value={2}>7 days ago</ToggleButton>
        <ToggleButton value={3}>30 days ago</ToggleButton>
        <ToggleButton value={4}>1 year ago</ToggleButton>
      </ToggleButtonGroup>
    </div>      
  )
}

export default RateFilters;