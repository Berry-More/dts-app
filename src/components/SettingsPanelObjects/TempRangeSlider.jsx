import React from 'react';
import Slider from "@mui/material/Slider";

const TempRangeSlider = ({ updateTempSliderValue }) => {

    const handleChange = (event, newValue) => {
        updateTempSliderValue(newValue)
    };

    const marks = [
        {
            value: -15,
            label: '-15°C'
        },
        {
            value: 0,
            label: '0°C'
        },
        {
            value: 15,
            label: '15°C'
        },
        {
            value: 30,
            label: '30°C'
        },
        {
            value: 45,
            label: '45°C'
        }
    ]

    return (
        <Slider
            size="small"
            onChangeCommitted={ handleChange }
            valueLabelDisplay="auto"
            defaultValue={ [0, 25] }
            marks={ marks }
            min={ -20 }
            max={ 50 }
        />
    )
}

export default TempRangeSlider
