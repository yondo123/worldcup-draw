import {createTheme} from '@mui/material';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            border: string;
            hover: string;
            disabled: string;
            background: string;
            subFont: string;
        };
    }
    interface ThemeOptions {
        status?: {
            border?: string;
            hover?: string;
            disabled?: string;
            background?: string;
            subFont?: string;
        };
    }
}
export const themeConfig = createTheme({
    status: {
        border: '#b2bec3',
        hover: '#76d6bc',
        disabled: '#ededed',
        background: '#fff',
        subFont: '#2d3436'
    },
    palette: {
        primary: {
            main: '#1dd1a1'
        },
        secondary: {
            main: '#ff7675'
        }
    }
});
