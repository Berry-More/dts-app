import React from 'react'
import Plot from 'react-plotly.js'
import { Stack } from '@mui/material'

const TimeProfileFigure = ({ depthValue, matrixData, windowWidth, startTime, endTime }) => {
    
    const array = matrixData.depth.map((x) => Math.abs(x - depthValue))
    const index = array.indexOf(Math.min(...array))

    return (
    <Stack
        display='flex'
        justifyContent='center'
        alignItems='center'
    >
        <Plot
            index='TimeProfilePlot'
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
                    range: [startTime.valueOf(), endTime.valueOf()]
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
            config={{
                responsive: true, 
                autosizable: true,
                modeBarButtonsToRemove: ['resetScale2d', 'zoomIn2d', 'zoomOut2d'],
                doubleClick: 'autosize'
            }}
        />
    </Stack>
  )
}

export default TimeProfileFigure