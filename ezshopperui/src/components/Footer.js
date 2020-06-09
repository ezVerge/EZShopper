import React from 'react';
import PropTypes from 'prop-types';
import {Grid, withStyles} from '@material-ui/core';
import AppVersion from './AppVersion';
import Support from 'components/Support/SupportContainer';

const Footer = props => {

    const {classes} = props;

    return (
        <Grid container className={classes.root}>
            <AppVersion/>
            <Support/>
        </Grid>
    );
};

const styles = theme => ({
    root: {
        // box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
        boxShadow: theme.shadows[2],
        // borderTop: `1px solid ${theme.palette.divider}`,
        fontSize: '.75rem',
        justifyContent: 'space-between',
        padding: `0 ${theme.spacing(1)}px 0 ${theme.spacing(1)}px`
    }
});

Footer.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Footer);
