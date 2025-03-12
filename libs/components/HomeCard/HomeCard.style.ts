import { scale, verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'

export const homeCardStyles = StyleSheet.create(theme => ({
    bgImage: {
        height: scale(210),
        width: '100%',
        resizeMode: 'stretch',
    },
    container: {
        height: 'auto',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: scale(24),
        padding: theme.spacing.x20,
    },
    totalBalance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.y5,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statsIcon: {
        backgroundColor: theme.colors.neutral350,
        padding: theme.spacing.y5,
        alignItems: 'center',
    },
    gap: {
        width: verticalScale(8),
    },
    alignCenter: {
        alignItems: 'center',
    },
    expenses: {
        flexDirectio: 'row',
        alignItems: 'center',
        gap: theme.spacing.y7,
    },
    income: {
        flexDirectio: 'row',
        alignItems: 'center',
        gap: theme.spacing.y7,
    },
}))
