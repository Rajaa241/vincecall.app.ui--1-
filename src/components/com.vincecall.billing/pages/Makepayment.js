import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const Makepayment = () => {
  return (
    <Card sx={{ margin: "89px" }}>
      <CardHeader title="Make Payment" sx={{ font: 'small-caption' }}></CardHeader>
      <Divider />
      <CardContent>
        To make a payment using the Billing Account you have on file, select the amount you wish to deposit into your account and click 'Process' to continue.
        Your next Billing Account statement will reflect a charge from Vitel Global Communications for this transaction.
        <Grid sx={{ marginTop: '12px' }} container item spacing={2}>
          <Grid item xs={3}>
            <Typography variant='h6' >Makepayment for:</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField size='small' sx={{ width: '223px' }} placeholder='select' label='select' select>
              <MenuItem value="Yes">Yes</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: '12px', }} container item spacing={2}>
          <Grid item xs={3}>
            <Typography variant='h6'>Amount:</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField size='small' />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant='contained' size='small' style={{ backgroundColor: 'rgb(38, 64, 89)' }}>Process</Button>
      </CardActions>
    </Card>
  )
}

export default Makepayment