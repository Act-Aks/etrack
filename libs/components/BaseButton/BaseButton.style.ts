import { verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'
import { BaseButtonProps } from './BaseButton.static'

export const buttonStyles = StyleSheet.create(theme => ({
    button: (loading: BaseButtonProps['loading']) => ({
        backgroundColor: loading ? 'transparent' : theme.colors.primary,
        borderRadius: theme.radius.r17,
        height: verticalScale(52),
        borderCurve: 'continuous',
        justifyContent: 'center',
        alignItems: 'center',
    }),
}))
