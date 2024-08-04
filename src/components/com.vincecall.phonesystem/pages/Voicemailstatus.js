import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardHeader, Divider } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from 'react-router-dom';

const Voicemailstatus = () => {
  const navigate = useNavigate();

  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="VinceCall - Voicemail Status">
      </CardHeader>
      <Divider />
      {				
        <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
          <Table stickyHeader aria-label="simple table">
            <TableHead sx={{ backgroundColor: "gray" }}>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Context</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Mbox</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>User</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Zone</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>NewMsg</TableCell>
              </TableRow>
            </TableHead>
          </Table>

        </TableContainer>}
      {/* <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination />
    </Grid> */}
    </Card >
  )
}

export default Voicemailstatus