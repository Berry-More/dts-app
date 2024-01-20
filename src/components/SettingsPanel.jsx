import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TempRangeSlider from "./SettingsPanelObjects/TempRangeSlider";
import DepthRangeSlider from "./SettingsPanelObjects/DepthRangeSlider";
import PlaceSelect from "./SettingsPanelObjects/PlaceSelect";
import StartDatePicker from "./SettingsPanelObjects/StartDatePicker";
import EndDatePicker from "./SettingsPanelObjects/EndDatePicker";

const SettingsPanel = ({ updateStartTime, updateEndTime, startTime, endTime, place, updatePlace, allPlaces, 
                         updateDepthSliderParams, depthSliderParams, updateTempSliderValue }) => {    
    return (
        <Card>
            <Grid 
            container spacing={ 7 } 
            sx={{ p: 3 }}
            alignItems="center"
            justifyContent="center"
            >
                <Grid item xs={ 2 }>
                    <StartDatePicker 
                        updateStartTime={ updateStartTime } 
                        startTime={ startTime }
                    />
                </Grid>
                <Grid item xs={ 2 }>
                    <EndDatePicker 
                        updateEndTime={ updateEndTime } 
                        endTime={ endTime }
                    />
                </Grid>
                <Grid item xs={ 2 } sx={{ mt: 1 }}>
                    <PlaceSelect 
                        updatePlace={ updatePlace } 
                        allPlaces={ allPlaces } 
                        place={ place }
                    />
                </Grid>
                <Grid item xs={ 3 }>
                    <Typography gutterBottom>Depth range slider</Typography>
                    <DepthRangeSlider 
                        updateDepthSliderParams={ updateDepthSliderParams } 
                        depthSliderParams={ depthSliderParams }
                    />
                </Grid>
                <Grid item xs={ 3 }>
                    <Typography gutterBottom>Color bar interval</Typography>
                    <TempRangeSlider 
                        updateTempSliderValue={ updateTempSliderValue } 
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default SettingsPanel
