import React from 'react'
import Plot from 'react-plotly.js'
import { Stack } from '@mui/material'

// const getDelta = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length
const getDelta = (arr) => {
    
    return (Math.max(...arr) - Math.min(...arr)) * 0.1
}

const DepthProfileFigure = ({ timeValue, matrixData, windowWidth }) => {
    
    const array = matrixData.time.map((x) => Math.abs(x - timeValue))
    const index = array.indexOf(Math.min(...array))
    const dataArray = []
    for (let i = 0; i < matrixData.temp.length; i++)
    {   
        dataArray.push(matrixData.temp[i][index])   
    }

    const xRange = [
        Math.min(...dataArray) - getDelta(dataArray), 
        Math.max(...dataArray) + getDelta(dataArray)
    ]
    
    const yRange = [
        matrixData.depth[matrixData.depth.length - 1], 
        matrixData.depth[0]
    ]

    return (
    <Stack
        display='flex'
        justifyContent='center'
        alignItems='center'
    >
        <Plot
            data= {
                [
                    {
                        y: matrixData.depth,
                        x: dataArray,
                        mode: 'lines',
                    },
                ]
            }
            layout={{ 
                width: 0.2 * windowWidth,
                height: 650,
                title: {
                    text: 'Thermogram 1D',
                    x: 0,
                },
                margin: {
                    b: 50,
                    t: 53,
                    r: 0,
                    l: 50,
                    pad: 0
                },
                xaxis: {
                    title: 'Temperature [C°]',
                    zeroline: false,
                    range: xRange
                },
                yaxis: {
                    title: 'Length of cable [m]',
                    zeroline: false,
                    range: yRange
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

export default DepthProfileFigure
