import { StyleSheet } from 'react-native-unistyles'

export const backButtonStyles = StyleSheet.create(theme => ({
    button: {
        backgroundColor: theme.colors.neutral600,
        alignSelf: 'flex-start',
        borderRadius: theme.radius.r12,
        borderCurve: 'continuous',
        padding: 5,
    },
}))
