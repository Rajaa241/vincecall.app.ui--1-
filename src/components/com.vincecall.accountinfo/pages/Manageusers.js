import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardHeader, Divider, IconButton, Link, TableBody, Tooltip } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';
import { DeleteForever, Edit } from '@mui/icons-material';

const Manageusers = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    props.setLoading(true)
    axiosInstance.get("/subusers/getAllSubusers").then(res => {
      setUsers(res.data)
      props.setLoading(false)
    }
    ).catch(err => console.log(err))
  }, [])


  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="VinceCall - Manage Users (You Can Add 1 More Sub Accounts)" action={<Button startIcon={<PersonAddAlt1Icon />} variant='contained' onClick={() => { navigate('/accountinfo/manageusers/create') }} size='small' >create SubUsers</Button>}>
      </CardHeader>
      <Divider />
      {
        <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
          <Table stickyHeader aria-label="simple table">
            <TableHead sx={{ backgroundColor: "gray" }}>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Name</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Email</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Phone</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Role</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Status</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Permissions</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>CDR's</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Ext's</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            {
              users.map((data, index) =>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ color: 'black' }}>{index + 1}</TableCell>
                    <TableCell sx={{ color: 'black' }}>{data.fullname}</TableCell>
                    <TableCell sx={{ color: 'black' }}>{data.username}</TableCell>
                    <TableCell sx={{ color: 'black' }}>{data.mobile}</TableCell>
                    <TableCell sx={{ color: 'black' }}>{data.roles[0].name}</TableCell>
                    <TableCell sx={{ color: 'black' }}>{data.status}</TableCell>
                    <TableCell sx={{ color: 'black' }}>
                      <Link sx={{ cursor: 'pointer' }}
                        component={"button"}
                        onClick={() => {
                          navigate("/accountinfo/manageusers/permissions",
                            { state: { username: data.username } })
                        }}
                      >Permissions</Link>
                    </TableCell>
                    <TableCell sx={{ color: 'white' }}>
                      <Link sx={{ cursor: 'pointer' }} component={"button"}
                      >Assign</Link>
                    </TableCell>
                    <TableCell sx={{ color: 'white' }}>
                      <Link sx={{ cursor: 'pointer' }}>Assign</Link>
                    </TableCell>
                    <TableCell sx={{ color: 'white' }}>
                      <Tooltip title="Edit">
                        <IconButton sx={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate("/accountinfo/manageusers/create",
                              { state: { formData: data } })
                          }}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton sx={{ cursor: "pointer" }} onClick={() => { axiosInstance.delete(`/subusers/delete?username=${data.username}`).then(res => setUsers(res.data)) }}>
                          <DeleteForever />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableBody>

              )
            }
          </Table>

        </TableContainer>}

    </Card >
  )
}

export default Manageusers