import React from 'react'
import dayjs from 'dayjs';
import { Stack, Slider } from '@mui/material';

const valueLabelFormat = (value) => {
    const currentData = new Date(value)
    //return dayjs(value - (currentData.getTimezoneOffset() * 60 * 1000)).toString()
    return dayjs(value - (currentData.getTimezoneOffset() * 60 * 1000)).format('MMM DD HH:MM')
}

const TimeProfileSlider = ({ updateTimeValue, timeRange }) => {

    const marksArray = [
        {
            value: timeRange[0],
            label: valueLabelFormat(timeRange[0]),
        },
        {
            value: timeRange[0] + (timeRange[1] - timeRange[0]) / 2,
            label: valueLabelFormat(timeRange[0] + (timeRange[1] - timeRange[0]) / 2),
        },
        {
            value: timeRange[1],
            label: valueLabelFormat(timeRange[1]),
        }
    ]

    return (
        <Stack 
            sx={{ width: 1155, ml: 7 }} 
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Slider
                size='small'
                defaultValue={ timeRange[0] }
                valueLabelDisplay="auto"
                track={ false }
                onChangeCommitted={ (e, value) => { updateTimeValue(value) } }
                min={ timeRange[0] }
                max={ timeRange[1] }
                step={ 60 * 5 * 1000 }
                valueLabelFormat={ valueLabelFormat }
                marks={ marksArray }
            />
        </Stack>
    )
}

export default TimeProfileSlider;
