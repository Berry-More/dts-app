import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const EndDatePicker = ({updateEndTime, endTime}) => {

  const handleChange = (newValue) => {
    updateEndTime(newValue)
  };

  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
      <DemoContainer components={ ['DatePicker'] }>
        <DatePicker 
          label="End date"
          value={ endTime }
          onChange={ handleChange }
          format="DD-MM-YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default EndDatePicker
