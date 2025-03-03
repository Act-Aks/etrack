import { ThemeColor } from '@/typings'
import { ViewStyle } from 'react-native'

export type SkeletonProps = Pick<ViewStyle, 'width' | 'height'> & {
    bgColor?: ThemeColor
    style?: ViewStyle
    animated?: boolean
    delay?: number
}
