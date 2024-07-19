import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import dayjs from 'dayjs';

const Header = ({ endTime }) => {
    return (
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <Typography variant='h5' color='inherit' component='div' sx={{ flexGrow: 1 }}>
                    GEOTECH: Data Monitoring
                </Typography>
                    <Button color='inherit' sx={{ fontWeight: '550' }}> { 'Last time update: ' + dayjs(endTime - 7 * 60 * 60 * 1000).format('DD MMM YYYY, HH:mm:ss') } </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
