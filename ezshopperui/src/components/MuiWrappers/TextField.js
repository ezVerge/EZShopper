import React from 'react';
import PropTypes from 'prop-types';
import {TextField as MuiTextField} from '@material-ui/core';

const TextField = ({input, useTooltip, ...props}) => (
    <MuiTextField {...input} {...props}/>
);

TextField.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    useTooltip: PropTypes.bool
};

export default (TextField);
