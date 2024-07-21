import React from 'react'
import dayjs from 'dayjs';
import { Stack, Slider } from '@mui/material';

const valueLabelFormat = (value) => {
    return dayjs(value - 7 * 60 * 60 * 1000).format('MMM DD HH:mm')
}

const TimeProfileSlider = ({ setTimeValue, startTime, endTime, windowWidth }) => {

    let marksArray = [
        {
            value: startTime,
            label: valueLabelFormat(startTime),
        },
        {
            value: startTime + (endTime - startTime) / 2,
            label: valueLabelFormat(startTime + (endTime - startTime) / 2),
        },
        {
            value: endTime,
            label: valueLabelFormat(endTime),
        }
    ]

    return (
        <Stack 
            sx={{ width: 0.60 * windowWidth - 10, ml: 7 }} 
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Slider
                size='small'
                defaultValue={ startTime }
                valueLabelDisplay='auto'
                track={ false }
                onChangeCommitted={ (e, value) => { setTimeValue(value - 6.8 * 60 * 60 * 1000) } }
                min={ startTime }
                max={ endTime }
                step={ 60 * 5 * 1000 }
                valueLabelFormat={ valueLabelFormat }
                marks={ marksArray }
            />
        </Stack>
    )
}

export default TimeProfileSlider;
