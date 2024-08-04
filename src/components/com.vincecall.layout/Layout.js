import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Breadcrumbs, Button, Chip, Divider, Grid, IconButton, LinearProgress, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { useState } from 'react';
import { AUTH_SECURE_USER_DETAILS_LS_LEY } from '../com.vincecall.auth/constants/Constants';
import { doLogout } from '../com.vincecall.auth/actions/Action';
import vincelogo from '../../assets/vincelogo.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { axiosInstance } from '../../interceptors/AxiosInterceptor';
import QrCodeIcon from '@mui/icons-material/QrCode';


ClippedDrawer.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default function ClippedDrawer(props) {

    const selc = [
        {
            title: 'Account Info',
            icon: <AccountCircleIcon />,
            menu: [
                { name: 'Contact Info', to: '/accountinfo/contactinfo' },
                { name: 'Manage Users', to: '/accountinfo/manageusers' },
                { name: 'User Documents', to: '/accountinfo/usercontacts' },
                { name: 'Contact List', to: '/accountinfo/contactlist' }
            ]
        },
        {
            title: 'Billing',
            icon: <ShoppingCartIcon />,
            menu: [
                { name: ' Make Payment', to: '/billing/makepayment' },
                { name: 'Invoices', to: '/billing/invoices' },
                // { name: 'User Documents', to: '/accountinfo/usercontacts' },
                // { name: 'Contact List', to: '/accountinfo/contactlist' }
            ]
        },
        {
            title: 'Phone System',
            icon: <PhonelinkIcon />,
            menu: [
                { name: 'List of Extensions', to: '/phonesystem/listofextensions' },
                { name: 'Direct Number List', to: '/phonesystem/DirectNumberList' },
                { name: 'Phone Status', to: '/phonesystem/phonestatus' },
                { name: 'Voicemail Status', to: '/phonesystem/voicemailstatus' },
                { name: 'Phone Features Code', to: '/phonesystem/phonefeaturescode' },
            ]
        },
    ]

    const MainComponent = props.component
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuanchorEl, setMenuAnchorEl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [menuanchorEl1, setMenuAnchorEl1] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const menuopen = Boolean(menuanchorEl);
    const [toolbar, setToolbar] = useState([]);
    const menuopen1 = Boolean(menuanchorEl1);
    const open = Boolean(anchorEl);
    const user = JSON.parse(sessionStorage.getItem(AUTH_SECURE_USER_DETAILS_LS_LEY));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuClick = (event, index) => {
        setMenuAnchorEl(event.currentTarget);
        setSelectedIndex(index)
    };
    const handleMenuClose = (h) => {
        navigate(h.to)
        setMenuAnchorEl(null);
    };

    React.useEffect(() => {
        if (user.roles[0] === "User") {
            axiosInstance.get("/user/getDetails")
                .then(res => {
                    console.log(res.data.toolBars)
                    setToolbar(JSON.parse(res.data.toolBars))
                })
                .catch(err => { console.log(err) })
        }

    }, [])

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar style={{ backgroundColor: "white", display: "flex", justifyContent: "space-between" }}>
                        <Grid container xs={12}>
                            <Grid item xs={6}>
                                <Grid item xs={12}>
                                    <img
                                        src={vincelogo}
                                        alt={"Logo"} width={"30%"} ></img>
                                </Grid>
                            </Grid>

                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <IconButton sx={{ p: 0, display: 'flex', justifyContent: 'flex-end' }} onClick={handleClick}>
                                    <Avatar />
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={() => {
                                        doLogout();
                                        navigate("/");
                                    }}>Logout</MenuItem>
                                </Menu>
                            </Grid>
                        </Grid>
                    </Toolbar>
                    <Toolbar style={{ display: "flex", justifyContent: "center", backgroundColor: "#17479e" }}>

                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            {user.roles[0] === "Super Admin" ?
                                <>
                                    <Stack direction={"row"} spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Chip label="Dashboard" sx={{ backgroundColor: '#126cd3', color: "white" }} onClick={() => { navigate("/dashboard") }} />
                                        <Chip label="Add users" sx={{ backgroundColor: '#126cd3', color: "white" }} onClick={() => { navigate("/addusers") }} />
                                        <Chip label="Manage Users" sx={{ backgroundColor: '#126cd3', color: "white" }} onClick={() => { navigate("/manageusers") }} />
                                    </Stack>
                                </>
                                :
                                user.roles[0] === "Admin" ?
                                    <Stack direction={"row"} spacing={5}>
                                        <Button variant='elevated' style={{ color: 'white', fontWeight: 'bold', font: 'small-caption' }} startIcon={<SpaceDashboardIcon />} onClick={() => { navigate('/dashboard') }}>
                                            Dashboard
                                        </Button>
                                        {/* <Chip label="Dashboard" sx={{ backgroundColor: '#126cd3', color: "white" }} onClick={() => { navigate('/dashboard') }} /> */}
                                        {selc.map((s, index) =>
                                            <>
                                                {s.title && s.menu
                                                    ?
                                                    // <Chip sx={{ backgroundColor: '#126cd3', color: "white" }} label={s.title} icon={<ExpandMoreIcon color='white' />} onClick={(event) => { handleMenuClick(event, index) }} />
                                                    <Button style={{ color: 'white', fontWeight: 'bold', font: 'small-caption' }}
                                                        onClick={(event) => { handleMenuClick(event, index) }}
                                                        onMouseEnter={(event) => { handleMenuClick(event, index) }}
                                                        startIcon={s.icon} endIcon={<ExpandMoreIcon color='white' />}>{s.title}</Button>
                                                    :
                                                    <Button style={{ color: 'white', fontWeight: 'bold' }} onClick={(event) => { handleMenuClick(event, index) }} endIcon={<ExpandMoreIcon color='white' />}>{s.title}</Button>
                                                    // <Chip
                                                    //     sx={{ backgroundColor: '#126cd3', color: "white" }}
                                                    //     onClick={(event) => { handleMenuClick(event, index) }}
                                                    //     label={s.title}
                                                    // />
                                                }
                                                <Menu
                                                    id="basic-menu"
                                                    key={index}
                                                    anchorEl={menuanchorEl}
                                                    open={menuopen}
                                                    onClose={handleMenuClose}
                                                    MenuListProps={{
                                                        'aria-labelledby': 'basic-button',
                                                        onMouseLeave: () => setMenuAnchorEl(null)
                                                    }}
                                                >
                                                    {selc[selectedIndex].menu.map((h, index) =>
                                                        <MenuItem key={index} value={h.name} sx={{ font: 'small-caption' }} onClick={() => {
                                                            handleMenuClose(h)
                                                        }}>{h.name}</MenuItem>
                                                    )
                                                    }
                                                </Menu>

                                            </>
                                        )}
                                        {/* <Chip label="CDRs" sx={{ color: 'white', backgroundColor: '#126cd3' }} onClick={() => { navigate('/callreports/cdrs') }} /> */}
                                        {/* <Button style={{ color: 'white', fontWeight: 'bold', font: 'small-caption' }} startIcon={<ShoppingCartIcon />} onClick={() => { navigate('/callreports/cdrs') }}>Billing</Button> */}
                                        <Button style={{ color: 'white', fontWeight: 'bold', font: 'small-caption' }} startIcon={<PhoneInTalkIcon />} onClick={() => { navigate('/callreports/cdrs') }}>CDRs</Button>
                                        <Button style={{ color: 'white', fontWeight: 'bold', font: 'small-caption' }} startIcon={<SupportAgentIcon />} endIcon={< ExpandMoreIcon color='white' />}
                                            onClick={(event) => { setMenuAnchorEl1(event.currentTarget) }}
                                            onMouseEnter={(event) => { setMenuAnchorEl1(event.currentTarget) }}
                                        >
                                            Support</Button>
                                        <Button style={{ color: 'white', fontWeight: 'bold', font: 'small-caption' }} startIcon={<QrCodeIcon />} onClick={() => { navigate('/qrcodes') }}>QR Codes</Button>
                                        {/* <Chip label="Support" sx={{ backgroundColor: '#126cd3' }} icon={< ExpandMoreIcon color='white' />} style={{ color: "white" }} onClick={(event) => { setMenuAnchorEl1(event.currentTarget) }} /> */}

                                        <Menu
                                            id="basic-menu"
                                            anchorEl={menuanchorEl1}
                                            open={menuopen1}
                                            onClose={() => setMenuAnchorEl1(null)}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                onMouseLeave: () => setMenuAnchorEl1(null)
                                            }}
                                        >
                                            {
                                                [
                                                    { name: 'Create Ticket', to: '/support/createticket' },
                                                    { name: 'Show Tickets', to: '/support/showtickets' }
                                                ].map((h) =>
                                                    <MenuItem value={h.name} sx={{ font: 'small-caption' }} onClick={() => {
                                                        setMenuAnchorEl1(null)
                                                        navigate(h.to)
                                                    }}>{h.name}</MenuItem>
                                                )
                                            }
                                        </Menu>
                                    </Stack>
                                    : <Stack direction={"row"} spacing={5}>
                                        {toolbar?.map((s, index) =>
                                            // <Grid container item xs={12}>
                                            // <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <>
                                                {
                                                    s?.title && s?.menu
                                                        ?
                                                        // <Chip sx={{ backgroundColor: '#126cd3', color: "white" }}
                                                        //     label={s.title} icon={<ExpandMoreIcon color='white' />}
                                                        //     onClick={(event) => { handleMenuClick(event, index) }} />

                                                        <Button style={{ color: 'white', fontWeight: 'bold', font: 'small-caption' }}
                                                            onClick={(event) => { handleMenuClick(event, index) }}
                                                            onMouseEnter={(event) => { handleMenuClick(event, index) }}
                                                            startIcon={s.icon} endIcon={<ExpandMoreIcon color='white' />}>{s.title}</Button>

                                                        :

                                                        // <Chip
                                                        //     sx={{ backgroundColor: '#126cd3', color: "white" }}
                                                        //     onClick={(event) => {
                                                        //         // console.log(s.to);
                                                        //         navigate(s.to)
                                                        //     }}
                                                        //     label={s.title}
                                                        // />

                                                        <Button style={{ color: 'white', fontWeight: 'bold', font: 'small-caption' }} startIcon={<QrCodeIcon />} onClick={() => { navigate(s.to) }}>{s.title}</Button>
                                                }
                                                <Menu
                                                    id="basic-menu"
                                                    key={index}
                                                    anchorEl={menuanchorEl}
                                                    open={menuopen}
                                                    onClose={handleMenuClose}
                                                    MenuListProps={{
                                                        'aria-labelledby': 'basic-button',
                                                    }}
                                                >
                                                    {
                                                        toolbar[selectedIndex]?.menu && toolbar[selectedIndex]?.menu.map((h, index) =>
                                                            <MenuItem key={index} sx={{ font: 'small-caption' }} value={h.name} onClick={() => {
                                                                handleMenuClose(h)
                                                            }}>{h.name}</MenuItem>
                                                        )
                                                    }
                                                </Menu>
                                            </>

                                        )}
                                    </Stack>
                            }
                        </Grid>
                    </Toolbar>
                    {loading ? <LinearProgress /> : <></>}
                </AppBar>
            </Box >
            <Breadcrumbs>home{props.title}</Breadcrumbs>
            <Box sx={{ marginTop: '155px' }}>
                <MainComponent
                    user={user}
                    {...props}
                    loading={loading}
                    setLoading={setLoading} />
            </Box>
        </>

    );
}
