import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect, withStyles} from '@material-ui/core';

const Select = ({classes, input, label, disabled, required, meta, onChange, fullWidth, ...props}) => {

    const [value, setValue] = useState(input.value || '1');

    const handleChange = event => {
        setValue(event.target.value);
        input.onChange && input.onChange(event);
    };

    return (
        <FormControl
            error={Boolean(meta.touched && meta.invalid)}
            disabled={disabled}
            required={required}
            fullWidth={fullWidth}
            className={classes.formControl}>
            {label && (<InputLabel>{label}</InputLabel>)}
            <MuiSelect
                {...input}
                value={value}
                onChange={handleChange}
                {...props}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
                    <MenuItem key={index} value={index}>{index}</MenuItem>
                ))}
            </MuiSelect>
            {(meta.touched && meta.invalid) &&
            <FormHelperText className={classes.error}>{meta.error}</FormHelperText>
            }
        </FormControl>
    );
};

const styles = theme => ({
    formControl: {
        width: 75
    },
    error: {
        marginTop: theme.spacing(1)
    }
});

Select.propTypes = {
    classes: PropTypes.object,
    onChange: PropTypes.func,
    input: PropTypes.object,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    fullWidth: PropTypes.bool
};

export default withStyles(styles)(Select);
