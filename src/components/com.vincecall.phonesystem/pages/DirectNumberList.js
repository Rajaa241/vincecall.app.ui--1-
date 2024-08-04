import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../interceptors/AxiosInterceptor'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardHeader, Chip, CircularProgress, Divider, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const DirectNumberList = () => {
  const [dids, setDids] = useState({});
  const navigate = useNavigate();
  
 
  useEffect(() => {
    axiosInstance.get(`/admin/fetch-dids`).then(
      (res) => {
        setDids(res.data)
      }
    ).catch(err => console.log(err))

  }, [])


  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="List Of Dids"></CardHeader>
      <Divider />
      {
        dids && Object.keys(dids).length === 0 ? <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Grid> :
          <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
            <Table stickyHeader aria-label="simple table">
              <TableHead sx={{ backgroundColor: "gray" }}>
                <TableRow>
                  <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                  <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Extension</TableCell>
                  <TableCell sx={{ backgroundColor: '#17479e', color: 'white', display: 'flex', justifyContent: 'left' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              {dids?.data?.allInboundRoutes && dids?.data?.allInboundRoutes?.inboundRoutes.map((header, index) =>
                <>
                  <TableBody>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{header.extension}</TableCell>
                      <TableCell>
                        {/* <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        {/* <MenuItem onClick={handleClose}>
                          CNAM update
                        </MenuItem> */}
                        {/* <MenuItem onClick={handleClose}>

                      </MenuItem>
                    </Menu> */}
                        <Chip label="Inbound Calling Report" sx={{ cursor: 'pointer' }}
                          onClick={() => {
                            let str = header.extension;
                            navigate("/phonesystem/DirectNumberList/inboundcallingreports",
                              { state: { extension: `${str} - Inbound Call Records`, id: str, title:"dids" } })
                          }} />
                      </TableCell>
                    </TableRow>
                  </TableBody >
                </>
              )
              }

            </Table>

          </TableContainer>}
      {/* <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination />
      </Grid> */}
    </Card >
  )
}

export default DirectNumberList