import { Edit } from '@mui/icons-material'
import { Card, CardHeader, Chip, Divider, IconButton, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const qrcodes = () => {
    return (
        <Card sx={{ borderTop: 'inset', margin: '80px' }}>
            <CardHeader title="List Of Extensions"></CardHeader>
            <Divider />

            <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "gray" }}>
                        <TableRow>
                            <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                            <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>cloud username</TableCell>
                            <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>cloud password</TableCell>
                            <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Extension</TableCell>
                            <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>View QR code</TableCell>
                            <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>1</TableCell>
                            <TableCell>sdfdafsadfsdfsadfsadfasdsda</TableCell>
                            <TableCell>*********</TableCell>
                            <TableCell>201</TableCell>
                            <TableCell><Link>code</Link></TableCell>
                            <TableCell><IconButton>
                                <Edit />
                            </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>

                </Table>

            </TableContainer>
            {/* <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination />
      </Grid> */}
        </Card>
    )
}

export default qrcodes
