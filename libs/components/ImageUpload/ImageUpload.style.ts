import { scale, verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'

export const imageUploadStyles = StyleSheet.create(theme => ({
    inputContainer: {
        width: '100%',
        height: verticalScale(54),
        backgroundColor: theme.colors.background,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderRadius: theme.radius.r15,
        borderColor: theme.colors.neutral500,
        borderStyle: 'dashed',
    },
    imageContainer: {
        height: scale(150),
        aspectRatio: 1,
        borderRadius: theme.radius.r15,
        borderCurve: 'continuous',
        overflow: 'hidden',
    },
    image: {
        flex: 1,
    },
    clearIcon: {
        position: 'absolute',
        top: scale(6),
        right: scale(6),
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
}))
