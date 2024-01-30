import React from "react";
import { Card, Grid } from "@mui/material";
import HeatMap from "./MatrixBlock/HeatMap";
import DepthProfileSlider from "./MatrixBlock/DepthProfileSlider";
import DepthProfileFigure from "./MatrixBlock/DepthProfileFigure";
import TimeProfileSlider from "./MatrixBlock/TimeProfileSlider";
import TempProfileFigure from "./MatrixBlock/TimeProfileFigure";
import Surface3D from "./MatrixBlock/Surface3D";

const MatrixBlock = ({ tempSliderValue, matrixData, startTime, endTime }) => {

    if (!matrixData)
    {
        matrixData = { temp: [[1, 2], [3, 4]], depth: [1, 2], time: [startTime.valueOf(), endTime.valueOf()] }
    }

    // depth value
    const [depthValue, setDepthValue] = React.useState(matrixData.depth[0])
    const updateDepthValue = (currentDepthValue) => {
        setDepthValue(currentDepthValue)
    }

    // time value
    const [timeValue, setTimeValue] = React.useState(matrixData.time[0])
    const updateTimeValue = (currentTimeValue) => {
        setTimeValue(currentTimeValue)
    }

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.window.innerWidth);
      }
    React.useEffect(() => {
      window.addEventListener("resize", handleResize, false);
    }, []);

    return (
        <Card sx={{ mt: 1 }}>
            <Grid
                container spacing={ 2 }
                sx={{ p: 1 }}
                alignItems="center"
                justifyContent="center"
            >
                {/* top level */}
                <Grid item xs={ 1 }>
                    <DepthProfileSlider 
                        depthValue={ depthValue }
                        updateDepthValue={ updateDepthValue }
                        depthRange={ matrixData.depth }
                    />
                </Grid>
                <Grid item xs={ 8 }>
                    <HeatMap 
                        tempSliderValue={ tempSliderValue }
                        matrixData={ matrixData }
                        startTime={ startTime }
                        endTime={ endTime }
                        timeValue={ timeValue }
                        depthValue={ depthValue }
                        windowWidth={ windowWidth }
                    />
                </Grid>
                <Grid item xs={ 3 }>
                    <DepthProfileFigure 
                        timeValue={ timeValue }
                        matrixData={ matrixData }
                        windowWidth={ windowWidth }
                    />
                </Grid>

                {/* middle level */}
                <Grid item xs={ 1 }>
                    <Surface3D
                        matrixData={ matrixData }
                    />
                </Grid>
                <Grid item xs={ 8 }>
                    <TimeProfileSlider 
                        updateTimeValue={ updateTimeValue }
                        timeRange={ [startTime.valueOf(), endTime.valueOf()] }
                        windowWidth={ windowWidth }
                    />
                </Grid>
                <Grid item xs={ 3 }>
                </Grid>

                {/* bottom level */}
                <Grid item xs={ 1 }>
                </Grid>
                <Grid item xs={ 8 }>
                    <TempProfileFigure
                        depthValue={ depthValue }
                        matrixData={ matrixData }
                        windowWidth={ windowWidth }
                    />                    
                </Grid>
                <Grid item xs={ 3 }>
                </Grid>
            </Grid>
        </Card>
    )
}

export default MatrixBlock;
