import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardHeader, Chip, Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Switch, TableBody } from '@mui/material';
import axios from 'axios';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';
import { MoreVert } from '@mui/icons-material';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [checked, setChecked] = useState({});
    const [sortBy, setSortBy] = useState("ACTIVE");

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        // axiosInstance.get("/auth/allusers").then(res => setUsers(res.data)).catch(err => console.log(err))
        if (sortBy) {
            axiosInstance.get(`/user/userBystatus?sortBy=${sortBy}`).then(res =>
                setUsers(res.data.filter((data) => data.roles[0].name !== "Super Admin"))
            ).
                catch(err => console.log(err))
        }
    }, [sortBy])
    return (
        <Card sx={{ borderTop: 'inset', margin: '80px' }}>
            <CardHeader title="VinceCall - Manage Users">
            </CardHeader>
            <Divider />
            <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={sortBy}
                        onChange={(e) => { setSortBy(e.target.value); }}
                    >
                        <FormControlLabel value="ACTIVE" control={<Radio />} label="Active" />
                        <FormControlLabel value="INACTIVE" control={<Radio />} label="Inactive" />
                        <FormControlLabel value="ALL" control={<Radio />} label="All" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            {
                <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
                    <Table stickyHeader aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "#17479e" }}>
                            <TableRow>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Name/Username</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Role</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Status</TableCell>
                                {/* <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Action</TableCell> */}
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Active/Inactive</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) =>
                                <TableRow>
                                    <TableCell>{user.associateId}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.roles[0].name}</TableCell>
                                    <TableCell>
                                        <Chip label={user.status} />
                                    </TableCell>
                                    <TableCell ><Switch
                                        checked={user.status === "ACTIVE" ? true : false}
                                        onChange={(e) => {
                                            setChecked({ [user.associateId]: true })
                                            axiosInstance.get(`/user/status?id=${user.associateId}`)
                                                .then(res => {
                                                    axiosInstance.get(`/user/userBystatus?sortBy=${sortBy}`)
                                                        .then(res =>
                                                            setUsers(res.data.filter((data) => data.roles[0].name !== "Super Admin"))).
                                                        catch(err => console.log(err))
                                                })
                                                .catch(err => { console.log(err.data); })
                                        }}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    /></TableCell>
                                    <TableCell >
                                        <Chip sx={{ cursor: 'pointer' }} size="small" label="view" />
                                    </TableCell>
                                    {/* <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Device</TableCell> */}
                                </TableRow>
                            )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>}

        </Card >
    )
}

export default ManageUsers