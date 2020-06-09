import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, CircularProgress} from '@material-ui/core';

class LoadingButton extends Component {

    state = {
        isLoading: false
    };

    constructor(props) {
        super(props);
        this.btn = React.createRef();
        this.state.isLoading = this.props.isLoading;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isLoading !== this.props.isLoading) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({isLoading: this.props.isLoading});
        }
    }

    renderContent() {
        if (this.state.isLoading) {
            return (
                <React.Fragment>
                    <CircularProgress
                        style={{
                            marginRight: 10
                        }}
                        thickness={5}
                        variant={'indeterminate'}
                        color={this.props.iconColor}
                        size={this.props.iconSize}
                    /> {this.props.text}
                </React.Fragment>);
        }
        return this.props.children;
    }

    render() {
        const {
            text,
            iconSize,
            iconColor,
            disabled,
            isLoading: loading,
            ...buttonProps
        } = this.props;

        const {isLoading} = this.state;

        return (
            <Button
                disableRipple
                ref={this.btn}
                {...buttonProps}
                disabled={isLoading || disabled}
            >
                {this.renderContent()}
            </Button>
        );
    }
}

LoadingButton.propTypes = {
    ...Button.propTypes,
    text: PropTypes.any,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func
};

LoadingButton.defaultProps = {
    text: 'Loading...',
    iconSize: 20,
    iconColor: 'primary'
};

export default LoadingButton;
