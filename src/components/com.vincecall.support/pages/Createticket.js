import React from 'react'
import { Box, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';

const Createticket = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    'Billing Issue',
    'Voicemail Service/ Issue',
    'Caller ID Issue',
    'Outbound Termination Issue',
    'Change of DID',
    'IP Phone Configuration',
    'Call Drop Issue',
    'Portal Access Service/Issue',
    'Conference Bridging Issue',
    'New Phone/ Lines Request',
    'Direct Inward Dial (DID)/ Issue',
  ]
  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="Vincecall - Support - Trouble Ticket System" >
      </CardHeader>
      <Divider />
      <CardContent>
        <Typography>
          Support representatives are available Monday through Friday 9:00 am to 5:30 pm EST.
        </Typography>
        <Typography>
          All support inquiries will be reviewed in the order received.
        </Typography>
        <Typography>
          Limited staff is available for emergency situations 24 hours a day 7 days a week.
        </Typography>
        <Typography>
          Technical Support representatives are not authorized to make phone calls to end users in response to Trouble Tickets.
        </Typography>
        <Typography variant='h6'>
          Please select the category best describing the issue you are experiencing to proceed
        </Typography>
        <Grid component="form" onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClickOpen()
        }} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <TextField
            label='issue'
            placeholder='issue'
            title='select'
            select={true}
            size='small'
            sx={{ width: '240px' }}
            required={true}
          >
            {data.map((d) =>
              <MenuItem value={d}>{d}</MenuItem>
            )}
          </TextField>
          <Button variant='contained' size='small' type='submit'>Go!</Button>
        </Grid>

      </CardContent>
      <Dialog
        open={open}
        onClose={handleClose}
      //  PaperProps={{
      //    component: 'form',
      //    onSubmit: (event) => {
      //      event.preventDefault();
      //      const formData = new FormData(event.currentTarget);
      //      const formJson = Object.fromEntries((formData as any).entries());
      //      const email = formJson.email;
      //      console.log(email);
      //      handleClose();
      //    },
      //  }}
      >
        <DialogTitle>Vincecall - Support - Trouble Ticket System</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please describe in detail the issue you are experiencing or why you feel you have been billed incorrectly so we may assist you properly.
            To proceed and submit this ticket to our Trouble Ticket system please click 'Add Ticket'
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Billing Id"
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add Ticket</Button>
        </DialogActions>
      </Dialog>

    </Card >
  )
}

export default Createticket