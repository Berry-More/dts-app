import React from 'react'
import Plot from 'react-plotly.js'
import { Stack } from '@mui/material'

const HeatMap = ({ tempSliderValue, matrixData, startTime, endTime, timeValue, depthValue, windowWidth }) => {

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
                        z: matrixData.temp,
                        y: matrixData.depth,
                        x: matrixData.time,
                        zmin: tempSliderValue[0],
                        zmax: tempSliderValue[1],
                        type: 'heatmap',
                        colorscale: 'Portland',
                        colorbar: {
                            orientation: 'h',
                            len: 0.3,
                            thickness: 20,
                            x: 0.4,
                            y: 0.995,
                            xanchor: 'left',
                            }
                        },
                        {
                            x: [timeValue, timeValue],
                            y: [matrixData.depth[0], matrixData.depth[matrixData.depth.length - 1]],
                            type: 'scatter',
                            mode: 'lines',
                            line: {color: 'black', width: 0.5}
                        },
                        {
                            x: [matrixData.time[0], matrixData.time[matrixData.time.length - 1]],
                            y: [depthValue, depthValue],
                            type: 'scatter',
                            mode: 'lines',
                            line: {color: 'black', width: 0.5}
                        }
                    ]
            }
                layout={{
                    showlegend: false,
                    title: {
                        text: 'Thermogram 2D [C°]', 
                        x: 0,
                    },
                    // width: 1200, 
                    width: 0.625 * windowWidth,
                    height: 650,
                    margin: {
                        b: 50,
                        t: 30,
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
                        title: 'Length of cable [m]',
                        range: [matrixData.depth[matrixData.depth.length - 1], matrixData.depth[0]],
                        zeroline: false
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

export default HeatMap