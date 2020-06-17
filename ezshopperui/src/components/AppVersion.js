import React from 'react';
import PropTypes from 'prop-types';
import {Typography, withStyles} from '@material-ui/core';
import packageJson from 'root/package.json';
import classNames from 'classnames';

const versions = packageJson.version.split('.');
const majorMinor = versions[0] + '.' + versions[1];

const AppVersion = ({classes, className}) => (
    <Typography className={classNames(classes.root, className)} variant={'body2'}>
        {`${packageJson.description} v${majorMinor}`}
    </Typography>
);

const styles = theme => ({
    root: {
        padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`
    }
});

AppVersion.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string
};

export default withStyles(styles)(AppVersion);
