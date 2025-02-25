import { ThemeColor } from '@/typings'
import { ViewStyle } from 'react-native'

export type ModalWrapperProps = {
    style?: ViewStyle
    children: React.ReactNode
    bg?: ThemeColor
}
