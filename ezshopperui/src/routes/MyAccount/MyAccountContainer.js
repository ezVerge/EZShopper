import React from 'react';
import PropTypes from 'prop-types';
import {Grid, withStyles} from '@material-ui/core';

const MyAccountContainer = props => {

    const {classes} = props;

    return (
        <Grid item className={classes.grid}>
            <p>My Account</p>
        </Grid>
    );

};

const styles = () => ({
    grid: {
        flex: 1
    }
});

MyAccountContainer.propTypes = {
    classes: PropTypes.object
};

export default (withStyles(styles, {withTheme: true})(MyAccountContainer));
