import { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

export type HeaderProps = {
    title?: string
    style?: ViewStyle
    leftIcon?: ReactNode
    rightIcon?: ReactNode
}
