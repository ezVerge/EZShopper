import React from 'react';
import PropTypes from 'prop-types';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';
import TextField from 'muiWrappers/TextField';
import withError from 'muiWrappers/withError';

const Autocomplete = ({input, useTooltip, meta, ...props}) => (
    <MuiAutocomplete
        {...props}
        renderInput={params => (
            <TextField {...params} {...input}/>
        )}
    />
);

Autocomplete.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    useTooltip: PropTypes.bool
};

// export default withError()(Autocomplete);
export default Autocomplete;
