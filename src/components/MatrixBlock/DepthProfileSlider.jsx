import React from 'react'
import { Stack, Slider } from '@mui/material';

const DepthProfileSlider = ({ setDepthValue, depthRange }) => {

    const marksArray = [
        {
            value: depthRange[0] * -1,
            label: depthRange[0] * -1,
        },
        {
            value: depthRange[depthRange.length - 1] * -1,
            label: depthRange[depthRange.length - 1] * -1,
        }
    ]

    const interval = (depthRange[depthRange.length - 1] - depthRange[0]) / 4
    for (let i = 1; i < 4; i++) 
    {
        let val = (depthRange[0] + i * interval).toFixed()
        if (val % 2 === 1){
            val++
        }
        marksArray.push({ value: val * -1, label: val * -1 });
    }

    return (
        <Stack 
            sx={{ height: 545, mt: 1 }} 
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Slider
                size='small'
                orientation="vertical"
                defaultValue={ depthRange[1] * -1 }
                valueLabelDisplay="auto"
                onChangeCommitted={ (e, value) => { setDepthValue(value * -1) } }
                track={ false }
                min={ depthRange[depthRange.length - 1] * -1 }
                max={ depthRange[0] * -1 }
                step={ 2 }
                marks={ marksArray }
            />
        </Stack>
    )
}

export default DepthProfileSlider;

