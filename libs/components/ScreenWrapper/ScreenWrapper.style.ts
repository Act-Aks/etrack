import { StyleSheet } from 'react-native-unistyles'

export const screenWrapperStyles = StyleSheet.create(theme => ({
    container: ({ paddingTop }: { paddingTop: number }) => ({
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop,
    }),
}))
