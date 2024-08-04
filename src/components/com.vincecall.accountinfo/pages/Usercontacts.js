import React from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardHeader, Divider, TextField } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from 'react-router-dom';

const Usercontacts = () => {
  const navigate = useNavigate();

  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="VinceCall - UserDocuments" action={<TextField label="search" placeholder='search' size="small" />}>
      </CardHeader>
      <Divider />
      {
        <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
          <Table stickyHeader aria-label="simple table">
            <TableHead sx={{ backgroundColor: "gray" }}>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>File Name</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Category</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Form</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Company Name</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Status</TableCell>
              </TableRow>
            </TableHead>
          </Table>

        </TableContainer>}

    </Card >
  )
}

export default Usercontacts