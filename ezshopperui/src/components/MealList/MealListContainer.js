import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core';
import MealList from 'components/MealList/MealListView';
import {getMeals} from 'reduxStore/meal/mealActions';
import MealSelectors from 'reduxStore/meal/mealSelectors';

const MealListContainer = props => {

    const {classes, getMeals, meals} = props;

    useEffect(() => {
        getMeals();
        // async function fetchData() {
        //     await worklistItemService.loadActivityHistory(recordId, workflow.id);
        // }
        // fetchData();
    }, []);

    return (
        <MealList classes={classes} meals={meals}/>
    );

};

const styles = () => ({
    grid: {
        display: 'flex',
        backgroundColor: 'blue',
        height: '50%'
    },
    mealsHeader: {
        margin: '0 auto',
        width: 300
    },
    paper: {
        margin: '0 auto',
        maxHeight: '50%',
        overflow: 'auto',
        width: 300
    },
    list: {
        overflow: 'auto',
        maxHeight: '200'
    }
});

MealListContainer.propTypes = {
    classes: PropTypes.object,
    getMeals: PropTypes.func,
    meals: PropTypes.array
};

const mapStateToProps = state => ({
    meals: MealSelectors.getMeals(state)
});

const mapDispatchToProps = dispatch => ({
    getMeals: () => dispatch(getMeals())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(MealListContainer));
