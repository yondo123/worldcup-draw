import {extendTheme} from '@chakra-ui/react';

export const chakraThemeConfig = extendTheme({
    colors: {
        draw: {
            border: '#f7fafc',
            font: '#2d3436',
            'sub-font': '#636e72',
            main: '#1dd1a1',
            hover: '#76d6bc',
            accent: '#ff7675',
            $disabled: '#ededed'
        }
    }
});
