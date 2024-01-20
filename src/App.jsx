import React from 'react';
import dayjs from 'dayjs';
import api from './api';
import Container from '@mui/material/Container';

import Header from './components/Header';
import MatrixBlock from './components/MatrixBlock';
import SettingsPanel from './components/SettingsPanel';

const App = () => {
  
  // state for End Time
  const [endTime, setEndTime] = React.useState(dayjs(Date()))
  const updateEndTime = (currentEndTime) => {
    setEndTime(currentEndTime)
  }
  
  // state for Start Time
  const [startTime, setStartTime] = React.useState(dayjs(endTime - 1000 * 60 * 60 * 24 * 7))
  const updateStartTime = (currentStartTime) => {
    setStartTime(currentStartTime)
  }

  // state for Place
  const [place, setPlace] = React.useState(undefined)
  const updatePlace = (currentPlace) => {
    setPlace(currentPlace)
  }

  // state for Depth Range
  const [depthSliderParams, setDepthSliderParams] = React.useState(undefined)
  const updateDepthSliderParams = (currentDepthSliderParams) => {
    setDepthSliderParams(currentDepthSliderParams)
  }

  // state for Matrix Data
  const[matrixData, setMatrixData] = React.useState(undefined)
  const updateMatrixData = (currentMatrixData) => {
    setMatrixData(currentMatrixData)
  }

  // state for All Places
  const [allPlaces, setAllPlaces] = React.useState(undefined)
  
  // effect for upload All Places
  React.useEffect(() =>
  {
    api.get('/places')
      .then((response) => 
      {
        //console.log(response.data)
        setAllPlaces(response.data['places'])
        updatePlace(response.data['places'][0])
      })
      .catch(error =>
      {
        console.error(error)
        setAllPlaces(undefined)
        updatePlace(undefined)
      })
  }, [])

  // effect for update Depth Range Slider
  React.useEffect(() => {
    if (place !== undefined)
    {
      const paramsVal = {time_start: startTime.unix(), time_end: endTime.unix(), place: place}
      api.get('/depth-range', { params:  paramsVal}) 
      .then((response) => 
      {
        //console.log(response.data)
        updateDepthSliderParams({value: response.data['depth-range'], visible: response.data['depth-range'],
                                 min: response.data['depth-range'][0], max: response.data['depth-range'][1]})
      })
      .catch(error => 
        {
        console.error(error)
        updateDepthSliderParams(undefined)
      })
    }
  }, [startTime, endTime, place])

  // effect for update Matrix Date
  React.useEffect(() => {
    if (place !== undefined && depthSliderParams !== undefined)
    {
      const paramsVal = 
      { 
        time_start: startTime.toDate().getTime() / 1000, 
        time_end: endTime.toDate().getTime() / 1000, 
        place: place,
        depth_min: depthSliderParams.value[0],
        depth_max: depthSliderParams.value[1]
      } 

      api.get('/data', { params: paramsVal })
        .then((response) => {
          //console.log(response.data)
          updateMatrixData(
            {temp: response.data['temp'], 
             time: response.data['time'].map((value) => value * 1000),
             depth: response.data['depth']
            }
          )
        })
        .catch(error => {
          console.error(error)
          updateMatrixData(undefined)
        })
    }
  }, [startTime, endTime, place, depthSliderParams])

  // state for Temperatire Range
  const [tempSliderValue, setTempSliderValue] = React.useState([0, 25])
  const updateTempSliderValue = (currentTempSliderValue) => {
    setTempSliderValue(currentTempSliderValue)
  }

  return <Container maxWidth='sd'>
    <Header />
    <SettingsPanel
      updateStartTime={ updateStartTime }
      updateEndTime={ updateEndTime }
      startTime={ startTime }
      endTime={ endTime }
      place={ place }
      updatePlace={ updatePlace }
      allPlaces={ allPlaces }
      updateDepthSliderParams={ updateDepthSliderParams }
      depthSliderParams={ depthSliderParams }
      updateTempSliderValue={ updateTempSliderValue }
    />
    <MatrixBlock 
      tempSliderValue={ tempSliderValue }
      matrixData={ matrixData }
      startTime={ startTime }
      endTime={ endTime }
    />
  </Container>
}

export default App;
