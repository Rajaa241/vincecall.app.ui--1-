import React, { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';

const Permissions = (props) => {
    const location = useLocation();
    const [checked, setChecked] = React.useState([]);
    const [state, setState] = useState({})
    const [toolBarData, setToolBarData] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [accountinfo, setAccountInfo] = useState({})
    const [support, setSupport] = useState({});
    const [phoneSystem, setPhoneSystem] = useState({})
    const [dashboard, setDashboard] = useState({});
    const [callReports, setCallReports] = useState({})

    const supportobj = {
        title: 'Support',
        menu:
            [
                { name: 'Create Ticket', to: '/support/createticket' },
                { name: 'Show Tickets', to: '/support/showtickets' }
            ],
        Support: true
    }



    useEffect(() => {
        axiosInstance.get(`/subusers/getSubuser?username=${location.state.username}`)
            .then(res => {
                setToolBarData(JSON.parse(res.data.toolBars))
            }
            )
            .
            catch(err => console.log(err))

    }, [])

    // toolBarData.map((data) => { console.log(Object.values(data)); });

    let Obj = {}
    toolBarData.map((data) => {
        console.log(data.title);
        Obj = { ...Obj, [data.title]: true }
        data?.menu?.map((submenu) => {
            console.log(submenu.name)
            Obj = { ...Obj, [submenu.name]: true }
        }
        )
    })
    Object.keys(Obj).map((data) => console.log(data))

    console.log(Obj);
    return (
        <Paper sx={{ margin: '120px' }}>
            <Button variant='contained' sx={{ color: 'white' }} onClick={() => {
                // props.setLoading(true);
                let data = [dashboard, accountinfo, phoneSystem, callReports, support].filter((obj) =>
                    Object.keys(obj).length !== 0 && Object.values(obj).length !== 0
                )

                if (accountinfo?.menu && accountinfo?.menu?.length === 0) {
                    data.pop(accountinfo);
                }
                else if (phoneSystem?.menu && phoneSystem?.menu?.length === 0) {
                    data.pop(phoneSystem)
                }


                // axiosInstance.post("/subusers/setToolbar",
                //     { username: location.state.username, toolBars: JSON.stringify(data) })
                //     .then(res => {
                //         console.log(res.data)
                //         props.setLoading(false)
                //     }
                //     )

                // setAccountInfo({ ...accountinfo, menu: menu })
                // setBilling({ ...billing, menu: billingmenu })
                // console.log(JSON.stringify(toolBarData));
            }}>Save</Button>
            {isDialogOpen ? <Dialog>
                <DialogTitle>Alert !!!</DialogTitle>
                <DialogContent>Please select atleast one option in Account Info or Phone System</DialogContent>
                <DialogActions>
                    <Button onClick={() => { setIsDialogOpen(false) }}>OK</Button>
                </DialogActions>
            </Dialog> : <></>}
            <Grid container item spacing={2} sx={{ padding: "60px", paddingLeft: '105px' }}>
                <Grid item xs={6}>
                    <Table>
                        <TableHead sx={{ backgroundColor: 'ghostwhite', border: 'inset' }}>
                            <TableRow>
                                <TableCell>
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={"DashBoard"}
                                            name={"DashBoard"}
                                            // checked={Dashboard}
                                            onChange={(e) => {
                                                setChecked([e.target.checked])
                                                if (e.target.checked) {
                                                    setDashboard({ title: 'Dashboard', to: '/dashboard', [e.target.name]: e.target.checked })
                                                    setState({ ...state, [e.target.name]: e.target.checked })
                                                } else {
                                                    setDashboard({})
                                                }
                                            }}
                                        />} label="DashBoard" />
                                </TableCell>
                                {/* <TableCell >Action</TableCell> */}
                            </TableRow>
                        </TableHead>
                    </Table>
                </Grid>
                <Grid item xs={6} >
                    <Table sx={{ border: 'inset' }}>
                        <TableHead sx={{ backgroundColor: 'ghostwhite' }}>
                            <TableRow>
                                <TableCell >
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={"Account Info"}
                                            name={"Account Info"}
                                            checked={checked[1]}
                                            onChange={(e) => {
                                                setChecked([e.target.checked])
                                                if (e.target.checked) {
                                                    setAccountInfo({ ...accountinfo, title: e.target.value })
                                                    setState({ ...state, [e.target.name]: e.target.checked })
                                                } else {
                                                    delete accountinfo["title"]
                                                }
                                            }}
                                        />
                                    } label="Account Info" />
                                </TableCell>
                                {/* <TableCell >Action</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >
                                    <Checkbox
                                        value={"Contact Info"}
                                        name={"Contact Info"}
                                        checked={checked[2]} onChange={(e) => {
                                            setChecked([e.target.checked])
                                            if (e.target.checked) {
                                                // setMenu([...menu, { name: e.target.value, to: '/accountinfo/contactinfo' }]);
                                                if (accountinfo?.menu && accountinfo.title) {
                                                    accountinfo.menu.push({ name: e.target.value, to: '/accountinfo/contactinfo' })
                                                    setState({ ...state, [e.target.name]: e.target.checked })
                                                }
                                                else {
                                                    if (accountinfo.title) {
                                                        setAccountInfo({ ...accountinfo, menu: [{ name: e.target.value, to: '/accountinfo/contactinfo' }] })
                                                        setState({ ...state, [e.target.name]: e.target.checked })
                                                    }
                                                }
                                                // setAccountInfo({ ...accountinfo, menu: [{ name: e.target.value, to: '/accountinfo/contactinfo' }] })
                                            } else {
                                                // setMenu(menu.filter((item) => item.name !== e.target.value));
                                                setAccountInfo({ ...accountinfo, menu: accountinfo.menu.filter((item) => item.name !== e.target.value) })
                                            }
                                        }} />Contact Info</TableCell>
                                {/* <TableCell ><Checkbox
                                    checked={checked[2]} onChange={() => { }} name="checked" />Edit</TableCell> */}
                            </TableRow>
                            <TableRow>
                                <TableCell ><Checkbox
                                    value={"User Documents"}
                                    name={"User Documents"}
                                    checked={checked[3]} onChange={(e) => {

                                        setChecked([e.target.checked])
                                        if (e.target.checked) {
                                            // setMenu([...menu, { name: e.target.value, to: '/accountinfo/usercontacts' }]);
                                            if (accountinfo?.menu && accountinfo.title) {
                                                accountinfo.menu.push({ name: e.target.value, to: '/accountinfo/usercontacts' })
                                                setState({ ...state, [e.target.name]: e.target.checked })
                                            }
                                            else {
                                                if (accountinfo.title) {
                                                    setAccountInfo({ ...accountinfo, menu: [{ name: e.target.value, to: '/accountinfo/usercontacts' }] })
                                                    setState({ ...state, [e.target.name]: e.target.checked })
                                                }
                                            }
                                            // accountinfo.menu.push({ name: e.target.value, to: '/accountinfo/usercontacts' })
                                        } else {
                                            // setMenu(menu.filter((item) => item.name !== e.target.value));
                                            setAccountInfo({ ...accountinfo, menu: accountinfo.menu.filter((item) => item.name !== e.target.value) })
                                        }
                                    }} />User Documents</TableCell>
                                {/* <TableCell ></TableCell> */}
                            </TableRow>
                            <TableRow>
                                <TableCell ><Checkbox
                                    value="Manage Users"
                                    name="Manage Users"
                                    checked={checked[4]} onChange={(e) => {
                                        setChecked([e.target.checked])
                                        if (e.target.checked) {
                                            // setMenu([...menu, { name: e.target.value, to: '/accountinfo/manageusers' }]);
                                            if (accountinfo?.menu && accountinfo.title) {
                                                accountinfo.menu.push({ name: e.target.value, to: '/accountinfo/manageusers' })
                                                setState({ ...state, [e.target.name]: e.target.checked })
                                            }
                                            else {
                                                if (accountinfo.title) {
                                                    setAccountInfo({ ...accountinfo, menu: [{ name: e.target.value, to: '/accountinfo/manageusers' }] })
                                                    setState({ ...state, [e.target.name]: e.target.checked })
                                                }
                                            }
                                        } else {
                                            // setMenu(menu.filter((item) => item.name !== e.target.value));
                                            setAccountInfo({ ...accountinfo, menu: accountinfo.menu.filter((item) => item.name !== e.target.value) })
                                        }
                                    }} />Manage Users</TableCell>
                                {/* <TableCell ><Checkbox checked={checked} onChange={() => { }} name="checked" />Edit <Checkbox checked={checked} onChange={() => { }} name="checked" />Delete</TableCell> */}
                            </TableRow>
                            <TableRow>
                                <TableCell >
                                    <Checkbox
                                        value="Contact List"
                                        name="Contact List"
                                        checked={checked[5]} onChange={(e) => {
                                            setChecked([e.target.checked])
                                            if (e.target.checked) {
                                                // setMenu([...menu, { name: e.target.value, to: '/accountinfo/contactlist' }]);
                                                if (accountinfo?.menu && accountinfo.title) {
                                                    accountinfo.menu.push({ name: e.target.value, to: '/accountinfo/contactlist' })
                                                    setState({ ...state, [e.target.name]: e.target.checked })
                                                }
                                                else {
                                                    if (accountinfo.title) {
                                                        setAccountInfo({ ...accountinfo, menu: [{ name: e.target.value, to: '/accountinfo/contactlist' }] })
                                                        setState({ ...state, [e.target.name]: e.target.checked })
                                                    }
                                                }
                                                // accountinfo.menu.push({ name: e.target.value, to: '/accountinfo/contactlist' })
                                            } else {
                                                // setToolBarData([...toolBarData, ])
                                                // setMenu(menu.filter((item) => item.name !== e.target.value));
                                                setAccountInfo({ ...accountinfo, menu: accountinfo.menu.filter((item) => item.name !== e.target.value) })
                                            }
                                        }} />
                                    Contact List
                                </TableCell>
                                {/* <TableCell ></TableCell> */}
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item xs={6}>
                    <Table sx={{ border: 'inset' }}>
                        <TableHead sx={{ backgroundColor: 'ghostwhite' }}>
                            <TableRow>
                                <TableCell >
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={"Phone System"}
                                            name={"Phone System"}
                                            checked={checked[10]}
                                            onChange={(e) => {
                                                setChecked([e.target.checked])
                                                if (e.target.checked) {
                                                    setPhoneSystem({ ...phoneSystem, title: e.target.value })
                                                    setState({ ...state, [e.target.name]: e.target.checked })

                                                } else {
                                                    delete phoneSystem["title"]
                                                }
                                            }}
                                        />
                                    } label="Phone System" />
                                </TableCell>
                                {/* <TableCell >Action</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={"List Of Extensions"}
                                            name={"List Of Extensions"}
                                            checked={checked[11]}
                                            onChange={(e) => {
                                                setChecked([e.target.checked])
                                                if (e.target.checked) {
                                                    // setPhoneMenu([...phonemenu, { name: e.target.value, to: '/' }]);
                                                    if (phoneSystem?.menu && phoneSystem.title) {
                                                        phoneSystem.menu.push({ name: e.target.value, to: '/phonesystem/listofextensions' })
                                                        setState({ ...state, [e.target.name]: e.target.checked })

                                                    }
                                                    else {
                                                        if (phoneSystem.title) {
                                                            setPhoneSystem({ ...phoneSystem, menu: [{ name: e.target.value, to: '/phonesystem/listofextensions' }] })
                                                            setState({ ...state, [e.target.name]: e.target.checked })

                                                        }
                                                    }
                                                    // setPhoneSystem({ ...phoneSystem, menu: [{ name: e.target.value, to: '/phonesystem/listofextensions' }] })
                                                } else {
                                                    // setPhoneMenu(phonemenu.filter((item) => item.name !== e.target.value));
                                                    setPhoneSystem({ ...phoneSystem, menu: phoneSystem.menu.filter((item) => item.name !== e.target.value) })
                                                }
                                            }}
                                        />
                                    } label="List of Extensions" />

                                </TableCell>
                                {/* <TableCell ><Checkbox
                                    checked={checked[8]} onChange={() => { }} name="checked" />Edit</TableCell> */}
                            </TableRow>
                            <TableRow>
                                <TableCell >
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={"Direct Number list"}
                                            name={"Direct Number list"}
                                            checked={checked[12]}
                                            onChange={(e) => {
                                                setChecked([e.target.checked])
                                                if (e.target.checked) {
                                                    if (phoneSystem?.menu && phoneSystem.title) {
                                                        phoneSystem.menu.push({ name: e.target.value, to: '/phonesystem/DirectNumberList' })
                                                        setState({ ...state, [e.target.name]: e.target.checked })

                                                    }
                                                    else {
                                                        if (phoneSystem.title) {
                                                            setPhoneSystem({ ...phoneSystem, menu: [{ name: e.target.value, to: '/phonesystem/DirectNumberList' }] })
                                                            setState({ ...state, [e.target.name]: e.target.checked })

                                                        }
                                                    }
                                                    // setPhoneMenu([...phonemenu, { name: e.target.value, to: '/' }]);
                                                    // phoneSystem.menu.push({ name: e.target.value, to: '/phonesystem/DirectNumberList' })
                                                    // setPhoneSystem({
                                                    //     ...phoneSystem,
                                                    //     menu: [{ name: e.target.value, to: '/' }]
                                                    // })
                                                } else {
                                                    // setPhoneMenu(phonemenu.filter((item) => item.name !== e.target.value));
                                                    setPhoneSystem({ ...phoneSystem, menu: phoneSystem.menu.filter((item) => item.name !== e.target.value) })
                                                }
                                            }}
                                        />
                                    } label="Direct Number List" />
                                </TableCell>
                                {/* <TableCell ></TableCell> */}
                            </TableRow>
                            <TableRow>
                                <TableCell >
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={"Phone Status"}
                                            name={"Phone Status"}
                                            checked={checked[12]}
                                            onChange={(e) => {
                                                setChecked([e.target.checked])
                                                if (e.target.checked) {
                                                    if (phoneSystem?.menu && phoneSystem.title) {
                                                        phoneSystem.menu.push({ name: e.target.value, to: '/phonesystem/phonestatus' })
                                                        setState({ ...state, [e.target.name]: e.target.checked })

                                                    }
                                                    else {
                                                        if (phoneSystem.title) {
                                                            setPhoneSystem({ ...phoneSystem, menu: [{ name: e.target.value, to: '/phonesystem/phonestatus' }] })
                                                            setState({ ...state, [e.target.name]: e.target.checked })

                                                        }
                                                    }
                                                    // setPhoneMenu([...phonemenu, { name: e.target.value, to: '/' }]);
                                                    // phoneSystem.menu.push({ name: e.target.value, to: '/phonesystem/phonestatus' })
                                                    // setPhoneSystem({
                                                    //     ...phoneSystem,
                                                    //     menu: [{ name: e.target.value, to: '/' }]
                                                    // })
                                                } else {
                                                    // setPhoneMenu(phonemenu.filter((item) => item.name !== e.target.value));
                                                    setPhoneSystem({ ...phoneSystem, menu: phoneSystem.menu.filter((item) => item.name !== e.target.value) })
                                                }
                                            }}
                                        />
                                    } label="Phone Status" />
                                </TableCell>
                                {/* <TableCell ></TableCell> */}
                            </TableRow>
                            <TableRow>
                                <TableCell >
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={"Voicemail Status"}
                                            name={"Voicemail Status"}
                                            checked={checked[13]}
                                            onChange={(e) => {
                                                setChecked([e.target.checked])
                                                if (e.target.checked) {
                                                    if (phoneSystem?.menu && phoneSystem.title) {
                                                        phoneSystem.menu.push({ name: e.target.value, to: '/phonesystem/voicemailstatus' })


                                                    }
                                                    else {
                                                        if (phoneSystem.title) {
                                                            setPhoneSystem({ ...phoneSystem, menu: [{ name: e.target.value, to: '/phonesystem/voicemailstatus' }] })
                                                        }
                                                    }
                                                    setState({ ...state, [e.target.name]: e.target.checked })
                                                    // setPhoneMenu([...phonemenu, { name: e.target.value, to: '/' }]);
                                                    // phoneSystem.menu.push({ name: e.target.value, to: '/' })
                                                } else {
                                                    // setPhoneMenu(phonemenu.filter(val => val.name !== e.target.value))
                                                    setPhoneSystem({ ...phoneSystem, menu: phoneSystem.menu.filter((item) => item.name !== e.target.value) })
                                                }
                                            }}
                                        />} label="Voicemail Status" />
                                </TableCell>
                                {/* <TableCell ><Checkbox checked={checked} onChange={() => { }} name="checked" />Edit <Checkbox checked={checked} onChange={() => { }} name="checked" />Delete</TableCell> */}
                            </TableRow>
                            <TableRow>
                                <TableCell >
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={"Phone Features code"}
                                            name={"Phone Features code"}
                                            checked={checked[14]}
                                            onChange={(e) => {
                                                setChecked([e.target.checked])
                                                if (e.target.checked) {
                                                    if (phoneSystem?.menu && phoneSystem.title) {
                                                        phoneSystem.menu.push({ name: e.target.value, to: '/phonesystem/phonefeaturescode' })
                                                    }
                                                    else {
                                                        if (phoneSystem.title) {
                                                            setPhoneSystem({ ...phoneSystem, menu: [{ name: e.target.value, to: '/phonesystem/phonefeaturescode' }] })
                                                        }
                                                    }
                                                    // setPhoneMenu([...phonemenu, { name: e.target.value, to: '/' }]);
                                                    // phoneSystem.menu.push({ name: e.target.value, to: '/' })
                                                } else {
                                                    // setPhoneMenu(phonemenu.filter((val) => val.name !== e.target.value))
                                                    setPhoneSystem({ ...phoneSystem, menu: phoneSystem.menu.filter((item) => item.name !== e.target.value) })
                                                }
                                            }}
                                        />} label="Phone Features Code" />
                                </TableCell>
                                {/* <TableCell ><Checkbox checked={checked} onChange={() => { }} name="checked" />Edit <Checkbox checked={checked} onChange={() => { }} name="checked" />Delete</TableCell> */}
                            </TableRow>

                        </TableBody>
                    </Table>
                </Grid>

                <Grid item xs={6}>
                    <Table sx={{ border: 'inset' }}>
                        <TableHead sx={{ backgroundColor: 'ghostwhite' }}>
                            <TableRow>
                                <TableCell >
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={"CDRs"}
                                            name={"CDRs"}
                                            checked={checked[15]} onChange={(e) => {
                                                if (e.target.checked) {
                                                    setCallReports({ title: e.target.value, to: '/callreports/cdrs' })
                                                    setState({ ...state, [e.target.name]: e.target.checked })
                                                }
                                                else {
                                                    setCallReports({})
                                                }
                                            }
                                            } />}
                                        label="Call Reports(CDRs)" />

                                </TableCell>
                                {/* <TableCell >Action</TableCell> */}
                            </TableRow>
                        </TableHead>
                    </Table>
                </Grid>
                <Grid item xs={6}>
                    <Table sx={{ border: 'inset' }}>
                        <TableHead sx={{ backgroundColor: 'ghostwhite' }}>
                            <TableRow>
                                <TableCell >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="Support"
                                                name="Support"
                                                checked={checked[16]}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSupport(supportobj)
                                                        setState({ ...state, [e.target.name]: e.target.checked })
                                                    }
                                                    else {
                                                        setSupport({})
                                                    }
                                                }}
                                            />
                                        }
                                        label="Support"
                                    />
                                </TableCell>
                                {/* <TableCell >Action</TableCell> */}
                            </TableRow>
                        </TableHead>
                    </Table>
                </Grid>
            </Grid>
        </Paper >
    )
}

export default Permissions