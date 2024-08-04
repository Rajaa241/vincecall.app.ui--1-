import { Button, Card, CardContent, CardHeader, CircularProgress, Divider, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';

const InboundCallRecords = (props) => {
    const location = useLocation();
    const [cdrsData, setCdrsData] = useState([]);
    const [records, setRecords] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [loading, setLoading] = useState(false);

    console.log(location.state.id);
    const handleCDRsRequest = (e) => {
        if (location?.state?.title === "dids") {
            setLoading(true)
            // setLoading(true)
            e.preventDefault();
            e.stopPropagation();
            axiosInstance.get(`/admin/fetch-cdrs?startDate=${startDate}&endDate=${endDate}&noOfRecords=${records}`).then(
                (res) => {
                    setCdrsData(res.data?.data?.fetchAllCdrs?.cdrs.filter((data) => data?.did === location?.state?.id))
                    // setShowTable(true);
                    setLoading(false)
                }
            ).catch(err => console.log(err))
        }
        else {
            setLoading(true)
            // setLoading(true)
            e.preventDefault();
            e.stopPropagation();
            axiosInstance.get(`/admin/fetch-cdrs?startDate=${startDate}&endDate=${endDate}&noOfRecords=${records}`).then(
                (res) => {
                    console.log(location?.state?.id);
                    // console.log(res?.data?.data?.fetchAllCdrs?.cdrs.filter((data) => data.src === 201));
                    const source = res?.data?.data?.fetchAllCdrs?.cdrs.filter((data) =>
                        data.src === location.state.id
                    )
                    const destination = res?.data?.data?.fetchAllCdrs?.cdrs.filter((data) =>
                        data.dst === location.state.id
                    )

                    setCdrsData([...source, ...destination])
                    setLoading(false)
                }
            ).catch(err => console.log(err))
        }
    }
    console.log(cdrsData.filter((data) => data.did === 201));


    return (
        <Card sx={{ borderTop: 'inset', margin: '80px' }}>
            <CardHeader title={location?.state?.extension}>
                {/* {location.state.extension} */}
            </CardHeader>
            <Divider />
            <CardContent>
                <Typography variant='h6'>Please select the dates to view the Call Detail Reports.</Typography>
                <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110px', backgroundColor: "rgb(241 241 241)" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={2}>
                            <Typography>StartDate:</Typography>
                            <TextField type="date" size='small' onChange={(e) => { setStartDate(e.target.value) }} />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography>EndDate:</Typography>
                            <TextField type="date" size='small' onChange={(e) => { setEndDate(e.target.value) }} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>Items Per Page</Typography>
                            <TextField size='small' sx={{ width: "80px" }} select placeholder='select' defaultValue={300} label='select' title='select'
                                onChange={(e) => { setRecords(e.target.value) }}>
                                <MenuItem value="100">100</MenuItem>
                                <MenuItem value="150">150</MenuItem>
                                <MenuItem value="300">300</MenuItem>
                                <MenuItem value="400">400</MenuItem>
                                <MenuItem value="500">500</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>&nbsp;</Typography>
                            <Button variant='contained' size='small'
                                onClick={handleCDRsRequest}
                            >Search</Button>
                        </Grid>
                    </Grid>

                </Paper>
            </CardContent>
            {loading ?
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Grid>
                :
                (cdrsData.length !== 0 ? <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
                    <Table stickyHeader aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "gray" }}>
                            <TableRow>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Call Date</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Source</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Destination</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Seconds</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>did</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Caller ID</TableCell>
                                <TableCell sx={{ backgroundColor: '#17479e', color: 'white', display: 'flex', justifyContent: 'left' }}>Disposition</TableCell>
                            </TableRow>
                        </TableHead>
                        {cdrsData.map((data, index) =>
                            <TableBody>
                                <TableRow>
                                    <TableCell >{index + 1}</TableCell>
                                    <TableCell >{data.calldate}</TableCell>
                                    <TableCell >{data.src}</TableCell>
                                    <TableCell >{data.dst}</TableCell>
                                    <TableCell >{data.duration}</TableCell>
                                    <TableCell >{data.did}</TableCell>
                                    <TableCell >{data.clid}</TableCell>
                                    <TableCell >{data.disposition}</TableCell>
                                </TableRow>
                            </TableBody>
                        )
                        }
                    </Table>
                </TableContainer> :
                    <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography>No Data found</Typography>
                    </Grid>)
            }
        </Card >
    )
}

export default InboundCallRecords