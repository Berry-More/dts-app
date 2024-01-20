import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const PlaceSelect = ({ updatePlace, allPlaces, place }) => {

    const handleChange = (event) => {
        updatePlace(event.target.value)
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
            <InputLabel id="well-name-select-label">Well name</InputLabel>
            <Select
            labelId="well-name-select-label"
            id="well-name-select"
            value={ place }
            label="Well name"
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
