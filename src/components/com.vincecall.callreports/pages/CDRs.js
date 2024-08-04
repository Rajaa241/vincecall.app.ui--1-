import React, { useState } from 'react'
import { axiosInstance } from '../../../interceptors/AxiosInterceptor'
import Paper from '@mui/material/Paper';
import moment from 'moment/moment';
import { Button, Card, CardContent, CardHeader, CircularProgress, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid


const CDRs = (props) => {
  const [cdrsData, setCdrsData] = useState({});
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [showTable, setShowTable] = useState(false);
  const [records, setRecords] = useState(300);
  const [loading, setLoading] = useState(false);

  const columnDefs = [
    { field: "calldate", type: "text", headerName: "Call Date", valueFormatter: startDate => moment(startDate.value, 'YYYY,MM,DD').format("DD-MM-YYYY"), filter: true, flex: 1 },
    { field: "clid", headerName: "Caller Id", type: "number", filter: true, flex: 1 },
    { field: "disposition", headerName: "Disposition", type: "text", filter: true, flex: 1 },
    { field: "duration", headerName: "Duration", type: "text", filter: true, valueFormatter: startDate => (`${moment.duration(startDate.value, 'seconds').minutes()}:${moment.duration(startDate.value, 'seconds').seconds()}`), flex: 1 },
    { field: "did", headerName: "Did", type: "text", filter: true, flex: 1 },
    { field: "outbound_cnum", headerName: "Outbound CallerID", type: "text", filter: true, flex: 1 },
    { field: "src", headerName: "Source", type: "text", filter: true, flex: 1 },
    { field: "dst", headerName: "Destination", type: "text", filter: true, flex: 1 },
    { field: "recordingfile", headerName: "Recording", type: "text", filter: true, flex: 1 },
  ];

  const handleCDRsRequest = (e) => {
    setLoading(true)
    e.preventDefault();
    e.stopPropagation();
    axiosInstance.get(`/admin/fetch-cdrs?startDate=${startDate}&endDate=${endDate}&noOfRecords=${records}`).then(
      (res) => {
        setCdrsData(res.data?.data)
        setShowTable(true);
        setLoading(false)
      }
    ).catch(err => console.log(err))
  }
  let cdrs = [];
  cdrs = cdrsData?.fetchAllCdrs?.["cdrs"];


  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="Call Records"></CardHeader>
      <Divider />
      <CardContent>
        <Typography variant='h6'>Please select the dates to view the Call Detail Reports.</Typography>
        <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110px', backgroundColor: "rgb(241 241 241)" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Grid
            component={"form"}
            container spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            onSubmit={handleCDRsRequest}
          >
            <Grid item xs={2}>
              <Typography>StartDate:</Typography>
              <TextField type="date" size='small' required={true} onChange={(e) => setStartDate(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
              <Typography>EndDate:</Typography>
              <TextField type="date" size='small' required={true} onChange={(e) => setEndDate(e.target.value)} />
            </Grid>
            <Grid item xs={3}>
              <Typography>Items Per Page</Typography>
              <TextField size='small' sx={{ width: "80px" }} select placeholder='select' defaultValue={300} required={true} label='select' title='select' onChange={(e) => setRecords(e.target.value)}>
                <MenuItem value="100">100</MenuItem>
                <MenuItem value="150">150</MenuItem>
                <MenuItem value="300">300</MenuItem>
                <MenuItem value="400">400</MenuItem>
                <MenuItem value="500">500</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <Typography>&nbsp;</Typography>
              {loading ? <CircularProgress /> : <Button type="submit" variant='contained' size='small'>Search</Button>}
            </Grid>
            {/* <Grid item xs={2}>
              <Typography>&nbsp;</Typography>
              <Link onClick={() => {
                setShowTable(false)
                setEndDate("")
                setStartDate("")
              }
              }>Clear</Link>
            </Grid> */}
          </Grid>

        </Paper>
      </CardContent>
      {cdrsData.length === 0 ?
        <Typography sx={{ display: 'flex', justifyContent: 'center' }}>Select dates to display the cdrs</Typography> :
        (showTable ? <div
          className="ag-theme-quartz" // applying the grid theme
          style={{ height: 340, width: "100%" }} // the grid will fill the size of the parent container
        >
          <AgGridReact
            rowData={cdrs}
            columnDefs={columnDefs}
          />
        </div> : <></>)
      }
    </Card>
  )
}

export default CDRs