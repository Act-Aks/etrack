import { verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'
import { BaseTextProps, DEFAULT_TEXT_SIZE } from './BaseText.static'

export const textStyle = StyleSheet.create(theme => ({
    text: ({
        size,
        color,
        fontWeight,
        textAlign,
    }: Pick<BaseTextProps, 'size' | 'color' | 'fontWeight' | 'textAlign'>) => ({
        fontSize: verticalScale(size ?? DEFAULT_TEXT_SIZE),
        color: theme.colors[color ?? 'text'],
        fontWeight: fontWeight ?? '400',
        textAlign: textAlign ?? 'left',
    }),
}))
