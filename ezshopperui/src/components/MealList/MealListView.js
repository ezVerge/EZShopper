import React from 'react';
import PropTypes from 'prop-types';
import {Grid, List, ListItem, ListItemText, Paper, Typography} from '@material-ui/core';

const MealListView = props => {

    const {classes, meals} = props;

    console.log(meals);
    return (
        <Grid container className={classes.grid} direction={'column'}>
            <Typography className={classes.mealsHeader}>
                My Meals
            </Typography>
            <Paper className={classes.paper} elevation={5}>
                <List className={classes.list}>
                    {meals.map(meal => (
                        <ListItem key={`listItem-${meal.id}`} button>
                            <ListItemText primary={meal.name} secondary={meal.comments}/>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Grid>
    );

};

MealListView.propTypes = {
    classes: PropTypes.object,
    meals: PropTypes.array
};

export default MealListView;
