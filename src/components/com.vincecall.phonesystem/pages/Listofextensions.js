import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardHeader, Checkbox, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, Grid, Menu, MenuItem, Stack, TextField, Typography } from '@mui/material';



const Listofextensions = (props) => {
  const [extensions, setExtensions] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [extension, setExtension] = useState();
  const [value, setValue] = useState("disable");
  const [isDialgoOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const fields = ["Unconditional", "Unavailable", "Busy"]

  useEffect(() => {
    props.setLoading(true)
    axiosInstance.get("/admin/fetch-extensions")
      .then(res => {
        setExtensions(res.data.data)
        props.setLoading(false)
      }).catch(err => { console.log(err) })

    axiosInstance.get("/admin/hello")
      .then(res => { console.log(res.data.data) }).catch(err => { console.log(err) })


  }, [])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const checkBoxvalues = ["Call waiting", "Do Not Disturb"]


  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="List Of Extensions"></CardHeader>
      <Divider />
      {Object.keys(extensions).length === 0 ? <Typography sx={{ display: 'flex', justifyContent: 'center' }}>Select dates to display the cdrs</Typography> :
        <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
          <Table stickyHeader aria-label="simple table">
            <TableHead sx={{ backgroundColor: "gray" }}>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Caller Id</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Ext/Destination</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Display Name</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            {
              extensions.fetchAllExtensions?.extension.map((header, index) =>
                <>
                  <TableBody>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      key={index}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{header.user.outboundCid}</TableCell>
                      <TableCell>{header.coreDevice.deviceId}</TableCell>
                      <TableCell>{header.user.name}</TableCell>
                      <TableCell>
                        <Chip label="Action" sx={{ backgroundColor: '#17479e', color: 'white', cursor: 'pointer' }}
                          onClick={(event) => {
                            setAnchorEl(event.currentTarget)
                            setExtension(header)
                          }} />
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={() => setAnchorEl(null)}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={() => {
                            setIsDialogOpen(true)
                            setAnchorEl(null)
                          }}>Extension Settings</MenuItem>
                          <MenuItem onClick={() => {
                            let str = extension.extensionId;
                            navigate("/phonesystem/DirectNumberList/inboundcallingreports",
                              { state: { extension: `${str} - Inbound Call Records`, id: str, title: "extensions" } })
                          }}>Inbound calling reports</MenuItem>
                        </Menu>
                        {/* {console.log(extensions.fetchAllExtensions?.extension[index])} */}
                      </TableCell>
                    </TableRow>
                  </TableBody >
                </>
              )
            }

          </Table>

        </TableContainer>}
      {
        isDialgoOpen ?
          <Dialog open={isDialgoOpen} onClose={() => setIsDialogOpen(false)}>
            <DialogTitle>
              Phone features
            </DialogTitle>
            <DialogContent>
              <Grid containersx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ padding: '15px', marginBottom: '10px' }}>
                  {/* <CardHeader title={}></CardHeader> */}
                  <Typography variant="body2">Phone Features</Typography>
                  <Divider sx={{ marginBottom: '20px' }} />
                  {checkBoxvalues.map((value) =>
                    // <Grid item margin="20px">
                    < FormControlLabel control={
                      <Checkbox
                        value={value}
                        name={value}
                      // checked={checked[1]}
                      // onChange={(e) => {
                      //   setChecked([e.target.checked])
                      //   if (e.target.checked) {
                      //     setAccountInfo({ ...accountinfo, title: e.target.value })
                      //     setState({ ...state, [e.target.name]: e.target.checked })
                      //   } else {
                      //     delete accountinfo["title"]
                      //   }
                      // }}
                      />
                    } label={<Typography variant="body2">{value}</Typography>} />
                    // </Grid>
                  )
                  }
                  &nbsp;
                  <TextField size="small"
                    select
                    sx={{ width: "240px" }}
                    defaultValue={value}
                    value={value}
                    label="Call Screening"

                    onChange={(e) => { setValue(e.target.value) }}
                    InputProps={{ style: { font: 'small-caption' } }}
                    InputLabelProps={{ shrink: true, style: { font: 'small-caption' } }}
                  >
                    {["disable", "enable"].map((data) =>
                      <MenuItem value={data}>{data}</MenuItem>
                    )}
                  </TextField>
                </Card>
                <Card mt={"10px"}>
                  <Typography variant="body2">Call Forwarding</Typography>
                  <Divider />
                  {/* <Typography variant="h5">Call Forwarding</Typography> */}
                  <Grid container xs={6} spacing={2} margin={"10px"}>
                    {fields.map((field) =>
                      <Grid item>
                        <TextField
                          size="small"
                          label={field}
                          placeholder={field}
                          InputProps={{ style: { font: 'small-caption' } }}
                          InputLabelProps={{ shrink: true, style: { font: 'small-caption' } }} />
                      </Grid>
                    )
                    }
                  </Grid>
                </Card>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Stack direction="row" spacing={2}>
                <Button sx={{ color: 'white', }} variant='contained'>update</Button>
                <Button sx={{ color: 'white', }} variant='contained' onClick={() => setIsDialogOpen(false)}>cancel</Button>
              </Stack>
            </DialogActions>
          </Dialog> : <></>
      }
      {/* <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination />
      </Grid> */}
    </Card >
  )
}

export default Listofextensions