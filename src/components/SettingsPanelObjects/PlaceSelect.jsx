import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const PlaceSelect = ({ setPlace, allPlaces, place }) => {

    const handleChange = (event) => {
        setPlace(event.target.value)
    };

    if (!place)
    {
        place = ''
    }
    if (!allPlaces)
    {
        allPlaces = ['']
    }

    return (
        <FormControl fullWidth>
            <InputLabel id='place-name-select-label'>Well name</InputLabel>
            <Select
            labelId='place-name-select-label'
            id='place-name-select'
            value={ place }
            label='Place name'
            onChange={ handleChange }
            >
                { allPlaces.map((place) => 
                    <MenuItem key= { allPlaces.indexOf(place) } value={ place }>
                        { place }
                    </MenuItem>) }
            </Select>
        </FormControl>
    )
}

export default PlaceSelect
