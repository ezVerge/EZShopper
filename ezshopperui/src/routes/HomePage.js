import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Grid, withStyles} from '@material-ui/core';
import MealList from 'components/MealList/MealListContainer';
import ShoppingList from 'components/ShoppingList/ShoppingListContainer';

const HomePage = props => {

    const {classes} = props;

    return (
        <Grid container className={classes.main}>
            <Grid item className={classes.grid}>
                <MealList/>
            </Grid>
            <Grid item className={classes.grid}>
                <ShoppingList/>
            </Grid>
            <Grid item className={classes.grid}>
                {/*empty*/}
            </Grid>
        </Grid>
    );

};

const styles = () => ({
    main: {
        backgroundColor: 'black',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    grid: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

HomePage.propTypes = {
    classes: PropTypes.object
};

export default (withStyles(styles, {withTheme: true})(HomePage));
