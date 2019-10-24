import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const theme = createMuiTheme({
    overrides: {
        MuiSvgIcon: {
                color: '#A9A9A9',
                bottom: 20,
        },
        MuiFormControl: {
            color: '#A9A9A9'
        },
        'label + .MuiInput-formControl': {
            marginTop: 0,
        },
        MuiInputBase: {
            input: {
                paddingBottom: 57,
                color: '#a9a9a9',
            },
        },
        MuiInput: {
            underline: {
                height: 1,
                paddingTop: 37,
                lineHeight: 30,
                "&&&&:before": {
                    borderBottom: '2px solid #A9A9A9',
                }
            }
        },
        MuiInputLabel: {
            root: {
                marginTop: 0,
                color: '#A9A9A9',
                "&$focused": {
                    color: "#A9A9A9",
                }
            }
        },

        MuiButton: {
            disableRipple: true,
        }
    }
});

export function OverridesCss() {
    return (
        <TextField value="value" label="aaa" />
    );
}

export default theme;