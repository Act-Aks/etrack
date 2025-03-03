import { verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'

export const walletItemStyles = StyleSheet.create(theme => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(17),
    },
    imageContainer: {
        height: verticalScale(45),
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: theme.colors.neutral600,
        borderRadius: theme.radius.r12,
        borderCurve: 'continuous',
        overflow: 'hidden',
    },
    image: {
        flex: 1,
    },
    nameContainer: {
        flex: 1,
        gap: 2,
        marginLeft: theme.spacing.x10,
    },
}))
