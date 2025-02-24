import { TabBarItemProps } from './TabBarItem.static'

export const useTabBarItem = ({
    route,
    state,
    descriptors,
    navigation,
    tabIndex,
}: TabBarItemProps) => {
    const { options } = descriptors[route.key]
    const isFocused = state.index === tabIndex

    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        })

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
        }
    }

    const onLongPress = () => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        })
    }

    return {
        isFocused,
        onLongPress,
        onPress,
        options,
        route,
    }
}
