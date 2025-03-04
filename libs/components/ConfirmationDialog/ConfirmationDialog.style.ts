import { StyleSheet } from 'react-native-unistyles'

export const confirmationDialogStyles = StyleSheet.create(theme => ({
    container: {
        gap: theme.spacing.y15,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.x7,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: theme.spacing.x12,
    },
    primaryButton: {
        flex: 1,
        backgroundColor: theme.colors.rose,
    },
    secondaryButton: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
}))
