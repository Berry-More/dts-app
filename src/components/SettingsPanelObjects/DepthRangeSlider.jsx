import React from 'react';
import Slider from "@mui/material/Slider";

const DepthRangeSlider = ({ updateDepthSliderParams, depthSliderParams }) => {

    if (!depthSliderParams)
    {
        depthSliderParams = {value: [0, 1], min: 0, max: 1}
    }

    const marksArray = [
        {
            value: depthSliderParams.min,
            label: depthSliderParams.min,
        },
        {
            value: depthSliderParams.max,
            label: depthSliderParams.max,
        }
    ]

    if (!(depthSliderParams.min === 0 && depthSliderParams.max === 1))
    {
        const interval = (depthSliderParams.max - depthSliderParams.min) / 4
        for (let i = 1; i < 4; i++) 
        {
            let val = (depthSliderParams.min + i * interval).toFixed()
            if (val % 2 === 1){
                val++
            }
            marksArray.push({ value: val, label: val});
        }
    }

    const handleChange = (event, newValue) => {
        updateDepthSliderParams({ value: newValue, min: depthSliderParams.min, max: depthSliderParams.max })
    };

    return (
        <Slider
            size="small"
            valueLabelDisplay="auto"
            onChangeCommitted={ handleChange }
            marks={ marksArray }
            step={ 2 }
            key={`slider-${depthSliderParams.value}`}
            defaultValue={ depthSliderParams.value }
            min={ depthSliderParams.min }
            max={ depthSliderParams.max }
        />
    )
}

export default DepthRangeSlider
