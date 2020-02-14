import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const RateFilters = ({onChange, value}) => {

  return (
      <ToggleButtonGroup type="checkbox" value={value} className="mb-2" onChange={onChange}>
        <ToggleButton value={"13.02.2020"}>Today</ToggleButton>
        <ToggleButton value={"06.02.2020"}>7 days ago</ToggleButton>
        <ToggleButton value={"13.01.2020"}>30 days ago</ToggleButton>
        <ToggleButton value={"13.02.2019"}>1 year ago</ToggleButton>
      </ToggleButtonGroup>     
  )
}

export default RateFilters;