import { TouchableOpacity } from 'react-native'
import { TabBarItemProps, tabIcon } from './TabBarItem.static'
import { tabBarItemStyles } from './TabBarItem.style'
import { useTabBarItem } from './TabBarItem.logic'
import TabBarIcon from '../TabBarIcon/TabBarIcon'

const TabBarItem: React.FC<TabBarItemProps> = props => {
    const { isFocused, onLongPress, onPress, options, route } =
        useTabBarItem(props)

    return (
        <TouchableOpacity
            // href={buildHref(route.name, route.params)}
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={tabBarItemStyles.tabBarItem}
        >
            <TabBarIcon icon={tabIcon[route.name]} isFocused={isFocused} />
        </TouchableOpacity>
    )
}

export default TabBarItem
