import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            height: 80,
        },
        MuiInputBase: {
            root:
            {
                display: 'inline',

            }
        },
        MuiInput: {
            input: {
                left: 20,
                top: 25,
                position: 'absolute',
                color: 'black'
            }
        },

        MuiButton: {
            disableRipple: true,
        }
    }
});

export function OverridesCss() {
    return (
        <TextField value="" label="" />
    );
}

export default theme;