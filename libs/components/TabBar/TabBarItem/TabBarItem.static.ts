import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TabBarIconProps } from '../TabBarIcon/TabBarIcon'

export type TabBarItemProps = BottomTabBarProps & {
    route: BottomTabBarProps['state']['routes'][number]
    tabIndex: number
}

export const tabIcon: Record<string, TabBarIconProps['icon']> = {
    index: 'House',
    statistics: 'ChartBar',
    wallet: 'Wallet',
    profile: 'User',
}
