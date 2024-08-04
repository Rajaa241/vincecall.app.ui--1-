import React from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardHeader, Divider, TableBody } from '@mui/material';

const Phonefeatures = () => {
  const data = [
    {
      num: "*52", action: "Call Forward No Answer/Unavailable Activate"
    },
    {
      num: "*53", action: "Call Forward No Answer/Unavailable Deactivate"
    },
    {
      num: "*72", action: "Call Forward All Activate"
    },
    {
      num: "*73", action: "Call Forward All Deactivate"
    },
    {
      num: "*90", action: "Call Forward Busy Activate"
    },
    {
      num: "*91", action: "Call Forward Busy Deactivate"
    },
    {
      num: "*97", action: "My Voicemail"
    },

  ]

  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="VinceCall - Phone Features Code">
      </CardHeader>
      <Divider />
      {
        <TableContainer sx={{ margin: '20px', width: "80%", display: 'flex', justifyContent:'center' }} component={Paper}>
          <Table sx={{ height: "80%", width: '80%' }} stickyHeader aria-label="simple table">
            <TableHead sx={{ backgroundColor: "gray" }}>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Handset Feature Code</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map((data) =>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>{data.num}</TableCell>
                    <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>{data.action}</TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>


        </TableContainer>}
      {/* <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination />
    </Grid> */}
    </Card >
  )
}

export default Phonefeatures