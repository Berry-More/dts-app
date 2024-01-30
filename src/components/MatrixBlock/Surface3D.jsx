import React from 'react'
import Plot from 'react-plotly.js'
import { Stack } from '@mui/material'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Surface3D = ({ matrixData }) => {
    
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Get 3D
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={ true } maxWidth='md'>
                <DialogTitle id="form-dialog-title">Thermogramm 3D [C°]</DialogTitle>
                <DialogContent>
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
                                    type: 'surface',
                                    colorscale: 'Portland',
                                    showscale: false
                                    },
                                ]
                        }
                            layout={{ 
                                showlegend: false,
                                width: 700, 
                                height: 700,
                                margin: {
                                    b: 50,
                                    t: 50,
                                    r: 0,
                                    l: 0,
                                    pad: 0
                                },
                                scene: {
                                        xaxis: {
                                            title: 'Date, time',
                                            type: 'date',
                                            zeroline: false,
                                        },
                                        yaxis: {
                                            title: 'Length of cable [m]',
                                            zeroline: false
                                        },
                                        zaxis: {
                                            title: 'Temperature [C°]',
                                            zeroline: false
                                        }
                                    },
                                plot_bgcolor: '#d9e6fa',
                            }}
                            useResizeHandler={true}
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            config={{responsive: true}}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                </DialogActions>
            </Dialog>
        </Stack>
    )
}

export default Surface3D