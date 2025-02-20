import { PropsWithChildren } from 'react'
import { TextProps, TextStyle } from 'react-native'

export type BaseTextProps = PropsWithChildren<{
    size?: number
    color?: string
    fontWeight?: TextStyle['fontWeight']
    style?: TextStyle
    textProps?: TextProps
}>

export const DEFAULT_TEXT_SIZE = 15
