import { StyleSheet } from 'react-native-unistyles'

export const dialogStyles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentsContainer: {
        backgroundColor: theme.colors.neutral800,
        borderRadius: 20,
        padding: 32,
        shadowColor: theme.colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        padding: 4,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.colors.overlay,
    },
}))
