import React from 'react';
import {createMuiTheme} from '@material-ui/core';
import {blueGrey, green, grey, orange, red} from '@material-ui/core/colors';
import {vwarning} from 'src/colors';

const theme = theme => {
    return createMuiTheme({
        palette: {
            type: theme,
            primary: {
                light: 'rgba(85, 157, 198, 1)',
                main: 'rgba(58, 108, 137, 1)',
                dark: 'rgba(48, 88, 111, 1)',
                contrastText: '#fff'
            },
            secondary: {
                light: 'rgba(149, 205, 54, 1)',
                main: 'rgba(119, 164, 42, 1)',
                dark: 'rgba(87, 120, 31, 1)',
                contrastText: '#fff'
            },
            error: {
                main: '#ff4545',
                dark: '#d32f2f',
                light: '#ff4545',
                contrastText: theme === 'dark' ? '#fff' : '#461919'
            },
            warning: {
                main: vwarning['500'],
                dark: vwarning.A700,
                light: vwarning.A700,
                contrastText: theme === 'dark' ? '#fff' : '#4F2D10'
            },
            info: {
                main: '#57b5e3',
                light: '#57b5e3',
                dark: '#2078e1',
                contrastText: theme === 'dark' ? '#fff' : '#0f1935'
            },
            success: {
                main: green['500'],
                dark: green.A700,
                light: green.A200,
                contrastText: theme === 'dark' ? '#fff' : green.A700
            },
            notStarted: {
                main: grey[theme === 'dark' ? '700' : '100'],
                dark: grey.A700,
                light: grey['50'],
                contrastText: theme === 'dark' ? '#fff' : '#000'
            },
            incomplete: {
                main: red[theme === 'dark' ? 'A700' : 'A300'],
                dark: red.A200,
                light: red.A700,
                contrastText: theme === 'light' ? '#fff' : '#000'
            },
            inProgress: {
                main: orange[theme === 'dark' ? 'A700' : 'A200'],
                dark: orange.A200,
                light: orange.A700,
                contrastText: theme === 'light' ? '#fff' : '#000'
            },
            open: {
                main: blueGrey[theme === 'dark' ? 'A700' : 'A200'],
                dark: blueGrey.A200,
                light: blueGrey.A700,
                contrastText: theme === 'light' ? '#fff' : '#000'
            },
            completed: {
                main: green[theme === 'dark' ? '700' : '500'],
                dark: green['500'],
                light: green['700'],
                contrastText: theme === 'light' ? '#fff' : '#fff'
            }
        },
        typography: {
            useNextVariants: true
        },
        overrides: {
            MuiDialog: {
                root: {
                    alignItems: 'center',
                    justifySelf: 'stretch'
                },
                container: {
                    alignItems: 'center',
                    display: 'flex'
                },
                paper: {
                    margin: 'inherit'
                }
            },
            MuiTooltip: {
                tooltip: {
                    fontSize: '0.8em'
                }
            }
        },
        zIndex: {
            modal: 1500
        },
        props: {
            icons: {
                evaluateInfo: 'assignment_ind',
                callPatient: 'settings_phone',
                createHra: 'multiline_chart',
                reschedulePatient: 'event_available',
                contactMember: 'settings_phone',
                planCare: 'assignment',
                sendMail: 'mail',
                contactProvider: 'business',
                planVisit: 'assignment_turned_in',
                retrieveRecords: 'save_alt',
                firstReview: 'done',
                secondReview: 'done_all',
                finalReview: 'done_outline'
            },
            avatar: {
                large: {
                    height: 60,
                    width: 60
                },
                medium: {
                    height: 40,
                    width: 40
                },
                small: {
                    height: 25,
                    width: 25
                }
            }
        }
    });
};

export default theme;
