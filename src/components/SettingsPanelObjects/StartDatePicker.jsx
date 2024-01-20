import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StartDatePicker = ({ updateStartTime, startTime }) => {

  // newValue.format('YYYY/MM/DD')
  const handleChange = (newValue) => {
    updateStartTime(newValue)
  };

  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
      <DemoContainer components={ ['DatePicker'] }>
        <DatePicker 
          label="Start date"
          value={ startTime }
          onChange={ handleChange }
          format="DD-MM-YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default StartDatePicker
