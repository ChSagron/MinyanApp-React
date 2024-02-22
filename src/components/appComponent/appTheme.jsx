import { autorun } from "mobx";
import { createTheme } from "@mui/material";
import dataStore from "../../data/stores/dataStore";

const appTheme = createTheme({
    direction: 'rtl',

    palette: {
        mode: 'dark',

        primary: {
            main: '#5302FF',
        },
        secondary: {
            main: '#DCFF02',
        },
        warning: {
            main: '#FF098E',
        },
    },

    components: {
        MuiTextField: {
            defaultProps: {
                color: "primary",
                exclusive: "true",
                fullWidth: true,
            },
            styleOverrides: {
                root: {
                    margin: "2% 0",
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: "outlined",
                fullWidth: true,
            },
            styleOverrides: {
                root: {
                    margin: "2% 0",
                }
            }
        },
        MuiToggleButtonGroup: {
            defaultProps: {
                color: "primary",
                fullWidth: true,

            },
            styleOverrides: {
                root: {
                    margin: "2% 0",
                }
                // root: ({ theme }) =>
                //   theme.unstable_sx({
                //     width: "60%",
                //   }),
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    margin: "2% 0",
                }
            }
        },
        MuiCard: {
            defaultProps: {
                variant: "outlined",
            },
            styleOverrides: {
                root: {
                    margin: "2% 0",
                }
            }
        }
    }
});


const updateAppTheme = () => {
    appTheme.palette.mode = dataStore.darkMode ? 'dark' : 'light';
};

updateAppTheme();

autorun(() => {
    updateAppTheme();
    console.log("updateAppTheme - appTheme:", appTheme);
});

export default appTheme;