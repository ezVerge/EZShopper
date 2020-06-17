import React from 'react';
import PropTypes from 'prop-types';
import {Grid, List, ListItem, ListItemText, Paper} from '@material-ui/core';
import ShoppingListItem from 'components/ShoppingListItem/ShoppingListItemContainer';

const ShoppingListView = props => {

    const {classes} = props;

    return (
        <Grid container>
            <ShoppingListItem/>
            <Paper className={classes.paper} elevation={5}>
                <List>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(sectionId => (
                        <ListItem key={`listItem-${sectionId}`} button>
                            <ListItemText primary={`Shopping List Item ${sectionId}`} secondary={`Secondary ${sectionId}`}/>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Grid>
    );

};

ShoppingListView.propTypes = {
    classes: PropTypes.object
};

export default ShoppingListView;
