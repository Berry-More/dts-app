import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TempRangeSlider from "./SettingsPanelObjects/TempRangeSlider";
import DepthRangeSlider from "./SettingsPanelObjects/DepthRangeSlider";
import PlaceSelect from "./SettingsPanelObjects/PlaceSelect";
import IntervalPicker from "./SettingsPanelObjects/IntervalPicker";


const SettingsPanel = ({ setStartTime, endTime, place, setPlace, allPlaces, 
                         setDepthSliderParams, depthSliderParams, setTempSliderValue }) => {    
    return (
        <Card>
            <Grid 
            container spacing={ 7 } 
            sx={{ p: 3 }}
            alignItems='center'
            justifyContent='center'
            >
                <Grid item xs={ 2 }>
                    <IntervalPicker 
                        setStartTime={ setStartTime } 
                        endTime={ endTime }
                    />
                </Grid>
                <Grid item xs={ 2 } sx={{ mt: 1 }}>
                    <PlaceSelect 
                        setPlace={ setPlace } 
                        allPlaces={ allPlaces } 
                        place={ place }
                    />
                </Grid>
                <Grid item xs={ 4 }>
                    <Typography gutterBottom>Depth range slider</Typography>
                    <DepthRangeSlider 
                        setDepthSliderParams={ setDepthSliderParams } 
                        depthSliderParams={ depthSliderParams }
                    />
                </Grid>
                <Grid item xs={ 4 }>
                    <Typography gutterBottom>Color bar interval</Typography>
                    <TempRangeSlider 
                        setTempSliderValue={ setTempSliderValue } 
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default SettingsPanel
