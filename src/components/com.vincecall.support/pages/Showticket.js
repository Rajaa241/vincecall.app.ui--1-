import React from 'react'
import { Button, Card, CardContent, CardHeader, Divider, Grid, Link, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Showticket = () => {
  const navigate = useNavigate();
  const data = [
    '10',
    '50',
    '100',
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
        <Typography>&nbsp;&nbsp;&nbsp;</Typography>
        <Typography>
          Limited staff is available for emergency situations 24 hours a day 7 days a week.
        </Typography>
        <Typography>&nbsp;&nbsp;&nbsp;</Typography>
        <Typography>
          <Link onClick={() => { navigate('/support/createticket') }}>Click here</Link> to open a new trouble ticket.
        </Typography>
        <Typography>&nbsp;&nbsp;&nbsp;</Typography>
        <Stack direction={'row'} spacing={2}>
          <Button variant='contained'>Open tickets</Button>
          <Button variant='contained'>Closed tickets</Button>
        </Stack>
        <Typography>&nbsp;&nbsp;&nbsp;</Typography>
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid>

            Items per Page:
            <Select label='issue' placeholder='issue' title='---select the issue---' size='small'>
              {data.map((d) =>
                <MenuItem value={d}>{d}</MenuItem>
              )}
            </Select>
          </Grid>
          <TextField size='small' label='search' />
        </Grid>

      </CardContent>
      <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
        <Table stickyHeader aria-label="simple table">
          <TableHead sx={{ backgroundColor: "gray" }}>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Ticket Number</TableCell>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Category</TableCell>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>DID</TableCell>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Opened</TableCell>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Last Updated</TableCell>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Status</TableCell>
            </TableRow>
          </TableHead>
        </Table>

      </TableContainer>
    </Card >
  )
}

export default Showticket





