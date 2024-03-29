import React from 'react'
import Plot from 'react-plotly.js'
import { Stack } from '@mui/material'

const TimeProfileFigure = ({ depthValue, matrixData, windowWidth }) => {
    
    const array = matrixData.depth.map((x) => Math.abs(x - depthValue))
    const index = array.indexOf(Math.min(...array))

    return (
    <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Plot
            data= {
                [
                    {
                        y: matrixData.temp[index],
                        x: matrixData.time,
                        mode: 'lines',
                    },
                ]
            }
            layout={{
                // width: 1200, 
                width: 0.625 * windowWidth,
                height: 200,
                margin: {
                    b: 50,
                    t: 0,
                    r: 0,
                    l: 50,
                    pad: 0
                },
                xaxis: {
                    title: 'Date, time',
                    type: 'date',
                    zeroline: false,
                    range: [matrixData.time[0], matrixData.time[matrixData.time.length - 1]]
                },
                yaxis: {
                    title: 'Temperature [C°]',
                    zeroline: false,
                },
                plot_bgcolor: '#d9e6fa',
                responsive: true
            }}
            useResizeHandler={true}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            config={{responsive: true, autosizable: true}}
        />
    </Stack>
  )
}

export default TimeProfileFigure