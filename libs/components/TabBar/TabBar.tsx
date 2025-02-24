import { View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { tabBarStyles } from './TabBar.style'
import TabBarItem from './TabBarItem/TabBarItem'

const TabBar: React.FC<BottomTabBarProps> = ({ state, ...props }) => {
    return (
        <View style={tabBarStyles.tabBar}>
            {state.routes.map((route, index) => (
                <TabBarItem
                    key={route.name}
                    route={route}
                    tabIndex={index}
                    state={state}
                    {...props}
                />
            ))}
        </View>
    )
}

export default TabBar
