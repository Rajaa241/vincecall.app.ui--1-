import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardHeader, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, MenuItem, Select, TableBody, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';
import { NAME_FIELD_ID, PHONE_FIELD_ID } from '../constants/Constants';
import { getTaskFields } from '../fields/GetFields';
import { DeleteForever } from '@mui/icons-material';

const ContactList = (props) => {
  console.log(props);
  const [open, setOpen] = React.useState(false);
  const fields = [NAME_FIELD_ID, PHONE_FIELD_ID]
  const formFields = getTaskFields(fields);
  const [formData, setFormData] = useState({})
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.setLoading(true)
    axiosInstance.get("/contacts/getContacts")
      .then(res => {
        setContacts(res.data);
        setLoading(false);
        props.setLoading(false)
      })
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field_name, event) => {
    setFormData({ ...formData, [field_name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    axiosInstance.post("/contacts/createContacts", formData)
      .then(res => {
        axiosInstance.get("/contacts/getContacts")
          .then(res => { setContacts(res.data); })
        setOpen(false)
      }).
      catch(err => console.log(err.data))
  }

  const handleDelete = (id) => {
    setLoading(true);
    axiosInstance.delete(`/contacts/deleteContact?id=${id}`).then(res => {
      axiosInstance.get("/contacts/getContacts")
        .then(res => {
          setContacts(res.data);
          setLoading(false)
        })
    }
    )
  }

  return (
    <Card sx={{ borderTop: 'inset', margin: '80px' }}>
      <CardHeader title="MobileAPP Contact Information"></CardHeader>
      <Divider />
      <Grid sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <>
          <Button variant="contained" size="small" startIcon={<AddIcon />} onClick={handleClickOpen}>Add Contact</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Typography>Items Per Page<Select size='small'>
            <MenuItem>100</MenuItem>
            <MenuItem>200</MenuItem>
          </Select>
          </Typography> */}
        </>
        <TextField type="text" size='small' placeholder='search' />
      </Grid>
      <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>

        <Table stickyHeader aria-label="simple table" style={{ marginTop: '10px' }}>

          <TableHead sx={{ backgroundColor: "gray" }}>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Name</TableCell>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Phone Number</TableCell>
              <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          {contacts.length !== 0 ?
            contacts.map((data) =>
              <TableBody>
                <TableRow>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.displayName}</TableCell>
                  <TableCell>{data.mobile}</TableCell>
                  <TableCell>
                    <IconButton sx={{ cursor: 'pointer' }} onClick={() => handleDelete(data.id)}>
                      {loading ? <CircularProgress /> : <DeleteForever />}
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) :
            (loading ?
              <CircularProgress /> :
              <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography>
                  No Data Found
                </Typography>
              </Grid>)
          }


        </Table>

      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Add contacts, please enter the name and mobile number here. We
            will send updates occasionally.
          </DialogContentText>
          {formFields.map((field) =>
            <TextField
              autoFocus
              required={field.required}
              margin="dense"
              id={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              fullWidth
              variant="standard"
              onChange={(e) => handleChange(field.name, e)}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: 'white' }} onClick={handleClose}>Cancel</Button>
          <Button sx={{ color: 'white' }} type="submit" onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Card >
  )
}

export default ContactList