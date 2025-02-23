import { verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'

export const inputStyles = StyleSheet.create(theme => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(54),
        borderWidth: 1,
        borderColor: theme.colors.neutral300,
        borderRadius: theme.radius.r17,
        borderCurve: 'continuous',
        paddingHorizontal: theme.spacing.x15,
        gap: theme.spacing.x10,
    },
    input: {
        flex: 1,
        color: theme.colors.white,
        fontSize: verticalScale(14),
    },
}))
