import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const SMSReport = () => {
  return (
    <Card sx={{ margin: "89px" }}>
      <CardHeader title="SMS Dashboard"></CardHeader>
      <Divider />
      <CardContent>
        Please select the dates to view the SMS Detail Reports.
        {/* <Paper sx={{ height: '200px', backgroundColor: "#f1f1f1" }}> */}
        {/* #f1f1f1  rgb(229 234 242 / 50%)*/}
        <Grid sx={{ marginTop: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} container item spacing={2}>

          <Grid item xs={3}>
            <Typography>
              Startdate:
            </Typography>
            <TextField type='date' size='small' />
          </Grid>
          <Grid item xs={3}>
            <Typography>
              Starthour:
            </Typography>
            <TextField size='small' sx={{ width: '190px' }} placeholder='select' label='select' select >
              <MenuItem value="Yes">Yes</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              Enddate:
            </Typography>
            <TextField type='date' size='small' />
          </Grid>

          <Grid item xs={3}>
            <Typography>
              Endhour:
            </Typography>
            <TextField size='small' sx={{ width: '190px' }} placeholder='select' label='select' select >
              <MenuItem value="Yes">Yes</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              Message Type:
            </Typography>
            <TextField size='small' sx={{ width: '190px' }} placeholder='select' label='select' select >
              <MenuItem value="Yes">Yes</MenuItem>
            </TextField>

          </Grid>
          <Grid item xs={3}>
            <Typography>
              Extension:
            </Typography>
            <TextField size='small' sx={{ width: '190px' }} select placeholder='select' label='select' >
              <MenuItem value="Yes">Yes</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <Typography>&nbsp;</Typography>
            <Button style={{ backgroundColor: 'rgb(38, 64, 89)' }} variant='contained' size='small'>Search</Button>
          </Grid>
        </Grid>
        {/* </Paper> */}
      </CardContent>

    </Card>
  )
}

export default SMSReport