import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Card, CardContent, CardHeader } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';
import { AUTH_SECURE_USER_DETAILS_LS_LEY } from '../../com.vincecall.auth/constants/Constants';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Users Chart',
        },
    },
};

const labels = ['Active', 'Inactive', 'Total'];

const Dashboard = () => {
    const user = JSON.parse(sessionStorage.getItem(AUTH_SECURE_USER_DETAILS_LS_LEY));
    const role = user.roles[0];
    const [usersCount, setUsersCount] = useState([]);
    useEffect(() => {
        axiosInstance.get("/analytics/getUsers")
            .then(res =>
                setUsersCount(res.data))
            .catch(err => console.log(err.data))

    }, [])

    const data = {
        labels,
        datasets: [
            {
                label: ['Users'],
                data: usersCount,
                backgroundColor: ['green', 'rgba(255, 99, 132, 0.5)', 'blue'],
            }
        ],
    };

    return (

        role === "Super Admin" ?
            <Grid container sx={{ width: '500px', height: '250px', display: 'flex', justifyContent: 'center' }}>
                <Bar options={options} data={data} />
            </Grid> : <></>

    );
}

export default Dashboard





