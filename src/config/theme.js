import { createTheme} from "@mui/material";

import "./theme.css";

const defaultTheme = createTheme();

const CircularFont = {
    fontFamily: 'Circular',
}

const theme = createTheme({
    typography: {
        ...CircularFont,
        h1: {
            ...defaultTheme.typography.h1,
            ...CircularFont,
            letterSpacing: 0,
        },
        h2: {
            ...defaultTheme.typography.h2,
            ...CircularFont,
            letterSpacing: defaultTheme.typography.pxToRem(-0.5),
        },
        h3: {
            ...defaultTheme.typography.h3,
            ...CircularFont,
        },
        h4: {
            ...defaultTheme.typography.h4,
            ...CircularFont,
            letterSpacing: defaultTheme.typography.pxToRem(0.5),
        },
        h5: {
            ...defaultTheme.typography.h5,
            ...CircularFont,
            fontSize: defaultTheme.typography.pxToRem(20),
        },
        h6: {
            ...defaultTheme.typography.h6,
            ...CircularFont,
            fontSize: defaultTheme.typography.pxToRem(16),
            letterSpacing: 0,
        },
        body: {
            ...defaultTheme.typography.body1,
            ...CircularFont,
            fontWeight: 400,
            letterSpacing: 0,
        },
    },
   
});

export default theme;