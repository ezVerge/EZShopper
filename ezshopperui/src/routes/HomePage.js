import React from 'react';
import PropTypes from 'prop-types';
import {Grid, List, ListItem, ListItemText, ListSubheader, withStyles} from '@material-ui/core';

const HomePage = props => {

    const {classes} = props;

    return (
        <Grid item className={classes.grid}>
            <List className={classes.list}>
                <ListSubheader className={classes.listSubHeader}>Members</ListSubheader>
                <ListItem button> {/*  onClick={() => onHandleClickItem(item.worklistItemId)} */}
                    <ListItemText>
                        Item 1
                    </ListItemText>
                    <ListItemText>
                        Item 2
                    </ListItemText>
                </ListItem>
            </List>
        </Grid>
    );

};

const styles = () => ({
    grid: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    list: {

    },
    listSubHeader: {

    }
});

HomePage.propTypes = {
    classes: PropTypes.object
};

export default (withStyles(styles, {withTheme: true})(HomePage));
