import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '@material-ui/core';
import withError from 'muiWrappers/withError';

const TextField = ({input, useTooltip, InputLabelProps, InputProps, ...props}) => (
    <Input {...InputLabelProps} {...InputProps} {...input} {...props}/>
);

TextField.propTypes = {
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
    input: PropTypes.object,
    useTooltip: PropTypes.bool
};

// export default withError()(TextField);
export default TextField;
