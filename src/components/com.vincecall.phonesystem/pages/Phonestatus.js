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

const Phonestatus = () => {
  const navigate = useNavigate();

  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="VinceCall - Phone Registry Status">
      </CardHeader>
      <Divider />
      {
        <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
          <Table stickyHeader aria-label="simple table">
            <TableHead sx={{ backgroundColor: "gray" }}>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Name/Username</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>IP Address</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Status</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Device</TableCell>
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

export default Phonestatus