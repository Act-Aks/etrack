import { PropsWithChildren } from 'react'
import { TouchableOpacityProps, ViewStyle } from 'react-native'

export type BaseButtonProps = PropsWithChildren<
    TouchableOpacityProps & {
        style?: ViewStyle
        onPress?: () => void | Promise<void>
        loading?: boolean
        asChild?: boolean
    }
>
