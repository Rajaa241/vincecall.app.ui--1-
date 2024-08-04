import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { axiosInstance } from '../../interceptors/AxiosInterceptor';

const GenericDialog = (props) => {
    const { fieldName, type, mapping, onSuccess, onError, openDialog, setOpenDialog, items, setItems } = props;
    const [value, setValue] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        axiosInstance.post(mapping, { [fieldName]: value }).then((res) => {
            setItems([...items, value]);
            onSuccess(res?.data);
            setOpenDialog(false);
        }).catch((error) => {
            onError(error);
        });
    };

    return (
        <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
        >
            <DialogTitle sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                color: "white",
                backgroundColor: "#029a9c",
            }}>{`Create New ${type}`}</DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleSubmit}>
                    <Grid
                        container
                        spacing={2}
                        sx={{ mt: 1 }}
                    >
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label={`New ${type}`}
                                placeholder={`Enter new ${type}`}
                                onChange={(event) => setValue(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="small"
                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default GenericDialog;
