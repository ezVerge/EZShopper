import React from 'react';
import PropTypes from 'prop-types';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, List, ListItem, ListItemText, Paper, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MealListView = props => {

    const {classes, meals} = props;

    return (
        <Grid container className={classes.grid} direction={'column'}>
            <Typography className={classes.mealsHeader}>
                My Meals
            </Typography>
            <Paper className={classes.paper} elevation={5}>
                <List className={classes.list}>
                    {Object.values(meals).map(meal => (
                        <ListItem key={`listItem-${meal.id}`} button>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                    <ListItemText primary={meal.name} secondary={meal.comments}/>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Grid>
    );

};

MealListView.propTypes = {
    classes: PropTypes.object,
    meals: PropTypes.object
};

export default MealListView;
