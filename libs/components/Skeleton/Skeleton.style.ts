import { StyleSheet } from 'react-native-unistyles'
import { SkeletonProps } from './Skeleton.static'

export const skeletonStyles = StyleSheet.create(theme => ({
    container: ({
        height,
        width,
        bgColor,
    }: Omit<SkeletonProps, 'animated' | 'style'>) => ({
        flexDirection: 'row',
        backgroundColor: bgColor ?? theme.colors.neutral500,
        borderRadius: theme.radius.r15,
        height: height,
        width: width,
        overflow: 'hidden',
    }),
    loader: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: theme.colors.black,
    },
}))
