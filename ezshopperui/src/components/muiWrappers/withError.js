import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import {FormControl, FormHelperText, InputLabel, Tooltip, withStyles} from '@material-ui/core';

const ErrorTooltip = withStyles(() => ({
    tooltip: {
        backgroundColor: 'red'
    }
}), {withTheme: true})(Tooltip);

const withError = (props = {useTooltip: false, placement: 'bottom', useFormControl: true}) => WrappedComponent => {
    return class extends React.Component {

        static displayName = `${WrappedComponent.displayName || WrappedComponent.name || 'Component'}WithError`;

        static propTypes = {
            meta: PropTypes.object,
            disabled: PropTypes.bool,
            required: PropTypes.bool,
            label: PropTypes.string,
            useTooltip: PropTypes.bool,
            fullWidth: PropTypes.bool
        };

        constructor(props) {
            super(props);
            const name = WrappedComponent.displayName || 'InputComponent-';
            this._id = uniqueId(name);
        }

        render() {
            if (this.props.meta.error && this.props.meta.touched) {
                if (props.useTooltip || this.props.useTooltip) {
                    return (
                        <FormControl fullWidth={this.props.fullWidth} error={Boolean(this.props.meta.touched && this.props.meta.invalid)} disabled={this.props.disabled} required={this.props.required}>
                            {this.props.label && <InputLabel htmlFor={this._id}>{this.props.label}</InputLabel>}
                            <ErrorTooltip
                                title={this.props.meta.error}
                                placement={props.placement}
                                open={true}
                            >
                                <WrappedComponent {...this.props} id={this._id}/>
                            </ErrorTooltip>
                        </FormControl>
                    );
                }
                if (props.useFormControl === false) {
                    return (<WrappedComponent {...this.props} id={this._id}/>);
                }
                return (
                    <FormControl fullWidth={this.props.fullWidth} error={Boolean(this.props.meta.touched && this.props.meta.invalid)} disabled={this.props.disabled} required={this.props.required}>
                        {this.props.label && <InputLabel htmlFor={this._id}>{this.props.label}</InputLabel>}
                        <WrappedComponent {...this.props} id={this._id}/>
                        <FormHelperText style={{marginTop: 5}}>{this.props.meta.error}</FormHelperText>
                    </FormControl>
                );
            }

            if (props.useFormControl === false) {
                return (<WrappedComponent {...this.props} id={this._id}/>);
            }

            return (
                <FormControl fullWidth={this.props.fullWidth} error={Boolean(this.props.meta.touched && this.props.meta.invalid)} disabled={this.props.disabled} required={this.props.required}>
                    {this.props.label && <InputLabel>{this.props.label}</InputLabel>}
                    <WrappedComponent {...this.props} />
                </FormControl>
            );
        }
    };
};

export default withError;
