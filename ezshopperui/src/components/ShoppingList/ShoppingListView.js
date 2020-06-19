import React from 'react';
import PropTypes from 'prop-types';
import {Grid, List, ListItem, ListItemText, Paper} from '@material-ui/core';
import ShoppingListItem from 'components/ShoppingListItem/ShoppingListItemContainer';

const ShoppingListView = props => {

    const {classes, list} = props;

    return (
        <Grid container>
            <ShoppingListItem/>
            <Paper className={classes.paper} elevation={5}>
                <List>
                    {Object.values(list).map(item => (
                        <ListItem key={`listItem-${item.id}`} button>
                            <ListItemText primary={item.name} secondary={item.comments}/>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Grid>
    );

};

ShoppingListView.propTypes = {
    classes: PropTypes.object,
    list: PropTypes.object
};

export default ShoppingListView;
