import { verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'
import { BaseTextProps, DEFAULT_TEXT_SIZE } from './BaseText.static'

export const textStyle = StyleSheet.create(theme => ({
    text: ({
        size,
        color,
        fontWeight,
    }: Pick<BaseTextProps, 'size' | 'color' | 'fontWeight'>) => ({
        fontSize: verticalScale(size ?? DEFAULT_TEXT_SIZE),
        color: color ?? theme.colors.text,
        fontWeight: fontWeight ?? '400',
    }),
}))
