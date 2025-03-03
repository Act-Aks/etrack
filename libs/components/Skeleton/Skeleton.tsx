import { useEffect } from 'react'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated'
import { SkeletonProps } from './Skeleton.static'
import { skeletonStyles } from './Skeleton.style'

const Skeleton: React.FC<SkeletonProps> = ({
    width = '100%',
    height = 20,
    bgColor,
    style,
    animated = true,
    delay = 200,
}) => {
    const shimmerTranslateX = useSharedValue(-100)
    const opacity = useSharedValue(0.3)

    useEffect(() => {
        if (animated) {
            shimmerTranslateX.value = withRepeat(
                withSequence(
                    withTiming(-100, { duration: 0 }),
                    withDelay(delay, withTiming(100, { duration: 1000 })),
                ),
                -1,
                false,
            )
            opacity.value = withRepeat(
                withSequence(
                    withTiming(0.3, { duration: 500 }),
                    withTiming(0.7, { duration: 500 }),
                ),
                -1,
                true,
            )
        }
    }, [animated, delay])

    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                {
                    translateX: `${shimmerTranslateX.value}%`,
                },
            ],
        }
    }, [])

    return (
        <Animated.View
            style={[
                skeletonStyles.container({ height, width, bgColor }),
                style,
            ]}
        >
            <Animated.View style={[skeletonStyles.loader, animatedStyles]} />
        </Animated.View>
    )
}

export default Skeleton
