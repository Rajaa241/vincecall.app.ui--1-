import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import vincelogo from '../../../assets/vincelogo.jpg'

AuthLogoContainer.propTypes = {
    title: PropTypes.string.isRequired
}

export default function AuthLogoContainer(props) {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <img
                    src={vincelogo}
                    alt={"Logo"} width={"70%"} ></img>
            </Grid>
            <Grid item xs={12}>
                <Typography component="h5" variant="h5" style={styles.emportal_auth_logo_container_title}>
                    {props.title}
                </Typography>
            </Grid>
        </React.Fragment>
    )
};

const styles = {
    emportal_auth_logo_container_title: {
        fontWeight: 400,
        color: "#0D134C"
    }
}