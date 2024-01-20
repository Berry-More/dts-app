import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h5" color="inherit" component="div">
                    DTS Monitoring
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
