import { StyleSheet } from 'react-native-unistyles'
import { spacing, colors, radius, fontSizes } from '@/libs/constants/theme'

const defaultTheme = {
    colors,
    spacing,
    radius,
    fontSizes,
}

const appThemes = {
    light: defaultTheme,
    dark: defaultTheme,
}

const breakpoints = {
    xs: 0,
    sm: 300,
    md: 500,
    lg: 800,
    xl: 1200,
}

type AppBreakpoints = typeof breakpoints
type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
    settings: {
        initialTheme: 'dark',
    },
    breakpoints,
    themes: appThemes,
})
