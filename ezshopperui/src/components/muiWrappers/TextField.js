import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '@material-ui/core';
import withError from 'muiWrappers/withError';

const TextField = ({input, useTooltip, ...props}) => (
    <Input {...input} {...props}/>
);

TextField.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    useTooltip: PropTypes.bool
};

export default withError()(TextField);
