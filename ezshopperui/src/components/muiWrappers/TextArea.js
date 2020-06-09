import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, Input, InputLabel, withStyles } from '@material-ui/core';

const TextArea = ({classes, input, placeholder, label, disabled, required, meta, charsMax, onChange, fullWidth, ...props}) => {

    const [chars, setChars] = useState(0);
    const [value, setValue] = useState(input.value || '');

    const handleChange = event => {
        if (!charsMax || event.target.value.length <= charsMax) {
            setValue(event.target.value);
            input.onChange && input.onChange(event);
            return;
        }
        setValue(event.target.value.substring(0, charsMax));
    };

    return (
        <FormControl error={Boolean(meta.touched && meta.invalid)} disabled={disabled} required={required} fullWidth={fullWidth}>
            {label && (<InputLabel>{label}</InputLabel>)}
            <Input
                {...input}
                value={value}
                onChange={handleChange}
                multiline
                {...props}
                onKeyUp={e => {
                    if (charsMax) {
                        setChars(e.target.value.length);
                    }
                }}
            />
            {(charsMax && meta.active && !meta.invalid) &&
            <FormHelperText className={classes.chars}>{chars}/{charsMax}</FormHelperText>
            }
            {(meta.touched && meta.invalid) &&
            <FormHelperText className={classes.error}>{meta.error}</FormHelperText>
            }
        </FormControl>
    );
};

const styles = theme => ({
    chars: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(1)
    },
    error: {
        marginTop: theme.spacing(1)
    }
});

TextArea.propTypes = {
    classes: PropTypes.object,
    onChange: PropTypes.func,
    input: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    multiple: PropTypes.bool,
    rowsMax: PropTypes.number,
    charsMax: PropTypes.number,
    multiline: PropTypes.bool,
    fullWidth: PropTypes.bool
};

TextArea.defaultProps = {
    rowsMax: 4,
    multiline: true
};

export default withStyles(styles)(TextArea);
