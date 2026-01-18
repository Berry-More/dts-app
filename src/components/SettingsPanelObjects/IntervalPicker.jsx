import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import dayjs from 'dayjs';


const IntervalPicker = ({ setStartTime, endTime }) => {

  const [intervalStr, setIntervalStr] = React.useState('30 Days')
  const allIntervals = {
    '1 Hour': 60 * 60 * 1000,
    '2 Hours': 2 * 60 * 60 * 1000,
    '6 Hours': 6 * 60 * 60 * 1000,
    '12 Hours': 12 * 60 * 60 * 1000,
    '1 Day': 24 * 60 * 60 * 1000, 
    '2 Days': 2 * 24 * 60 * 60 * 1000, 
    '7 Days': 7 * 24 * 60 * 60 * 1000, 
    '30 Days': 30 * 24 * 60 * 60 * 1000
  }

  const handleChange = (event) => {
    setIntervalStr(event.target.value);
    setStartTime(dayjs(endTime.unix() * 1000 - allIntervals[event.target.value]));
  };

  return (
      <FormControl fullWidth>
          <InputLabel id='interval-select-label'>Interval</InputLabel>
          <Select
          labelId='interval-select-label'
          id='interval-select'
          value={ intervalStr }
          label='Interval'
          onChange={ handleChange }
          >
              { Object.keys(allIntervals).map((interval) => 
                  <MenuItem key= { Object.keys(allIntervals).indexOf(interval) } value={ interval }>
                      { interval }
                  </MenuItem>) }
          </Select>
      </FormControl>
  )
}

export default IntervalPicker
