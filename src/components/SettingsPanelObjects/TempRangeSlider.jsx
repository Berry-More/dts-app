import React from 'react';
import Slider from "@mui/material/Slider";

const TempRangeSlider = ({ setTempSliderValue }) => {

    const handleChange = (event, newValue) => {
        setTempSliderValue(newValue)
    };

    const marks = [
        {
            value: -60,
            label: '-60°C'
        },
        {
            value: -30,
            label: '-30°C'
        },
        {
            value: 0,
            label: '0°C'
        },
        {
            value: 30,
            label: '30°C'
        },
        {
            value: 60,
            label: '60°C'
        }
    ]

    return (
        <Slider
            size='small'
            onChangeCommitted={ handleChange }
            valueLabelDisplay='auto'
            defaultValue={ [0, 25] }
            marks={ marks }
            min={ -60 }
            max={ 60 }
        />
    )
}

export default TempRangeSlider
