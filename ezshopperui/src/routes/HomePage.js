import React from 'react';
import PropTypes from 'prop-types';
import {Grid, withStyles} from '@material-ui/core';

const HomePage = props => {

    const {classes} = props;

    return (
        <Grid item className={classes.grid}>
            <p>Home</p>
        </Grid>
    );

};

const styles = () => ({
    grid: {
        flex: 1
    }
});

HomePage.propTypes = {
    classes: PropTypes.object
};

export default (withStyles(styles, {withTheme: true})(HomePage));
