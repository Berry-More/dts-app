import React from 'react';
import dayjs from 'dayjs';
import api from './api';
import Container from '@mui/material/Container';

import Header from './components/Header';
import MatrixBlock from './components/MatrixBlock';
import SettingsPanel from './components/SettingsPanel';

const App = () => {

  const getNowTime = () => {
    return dayjs(dayjs() + 7 * 60 * 60 * 1000);
  }

  // state for End Time
  const [endTime, setEndTime] = React.useState(getNowTime());
  
  // state for Start Time
  const [startTime, setStartTime] = React.useState(dayjs(endTime -  7 * 24 * 60 * 60 * 1000));

  // state for Place
  const [place, setPlace] = React.useState(undefined)

  // state for Depth Range
  const [depthSliderParams, setDepthSliderParams] = React.useState(undefined)

  // state for Matrix Data
  const[matrixData, setMatrixData] = React.useState(undefined)

  // state for All Places
  const [allPlaces, setAllPlaces] = React.useState(undefined)

  // state for Temperatire Range
  const [tempSliderValue, setTempSliderValue] = React.useState([0, 25])
  
  // effect for upload All Places
  React.useEffect(() =>
  {
    api.get('/place')
      .then((response) => 
      {
        const placeNames = response.data['places'].map((place) => place.name);
        setAllPlaces(placeNames);
        setPlace(placeNames[0]);
      })
      .catch(error =>
      {
        console.error(error)
        setAllPlaces(undefined)
        setPlace(undefined)
      })
  }, [])

  // effect for update Depth Range Slider
  React.useEffect(() => {
    if (place !== undefined)
      {
        const paramsVal = {time_start: startTime.unix(), time_end: endTime.unix(), place_name: place}
        api.get('/depth-range', { params:  paramsVal}) 
        .then((response) => 
        {
          setDepthSliderParams({value: response.data['depth-range'], visible: response.data['depth-range'],
                                min: response.data['depth-range'][0], max: response.data['depth-range'][1]})
        })
        .catch(error => 
          {
          console.error(error)
          setDepthSliderParams(undefined)
        })
      }
  }, [startTime, endTime, place])

  // effect for update Matrix Date
  React.useEffect(() => {
    if (place !== undefined && depthSliderParams !== undefined)
      {
        const paramsVal = 
        { 
          time_start: (startTime.toDate().getTime() / 1000) - 20 * 60, 
          time_end: endTime.toDate().getTime() / 1000, 
          place: place,
          depth_min: depthSliderParams.value[0],
          depth_max: depthSliderParams.value[1]
        } 
  
        api.get('/data', { params: paramsVal })
          .then((response) => {
            setMatrixData(
              {temp: response.data['temp'], 
               time: response.data['time'].map((value) => (value - 7 * 60 * 60) * 1000),
               depth: response.data['depth']
              }
            )
          })
          .catch(error => {
            console.error(error)
            setMatrixData(undefined)
          })
      }
  }, [startTime, endTime, place, depthSliderParams])

  // обновление данных раз в заданное время
  const intervalMinutes = 2 // минуты
  React.useEffect(() =>
    {
      const intervalId = setInterval((place) => {
        setEndTime(getNowTime());
        console.log(dayjs().format('HH:mm:ss') + ' updated!');
      }, intervalMinutes * 60 * 1000, place);

      return () => clearInterval(intervalId);
    }, [place])

  return <Container maxWidth='sd'>
    <Header endTime={ endTime } />
    <SettingsPanel
      setStartTime={ setStartTime }
      endTime={ endTime }
      place={ place }
      setPlace={ setPlace }
      allPlaces={ allPlaces }
      setDepthSliderParams={ setDepthSliderParams }
      depthSliderParams={ depthSliderParams }
      setTempSliderValue={ setTempSliderValue }
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
