import { TabBar } from '@/libs/components'
import { Tabs } from 'expo-router'

const TabLayout = () => {
    return (
        <Tabs tabBar={TabBar} screenOptions={{ headerShown: false }}>
            <Tabs.Screen name={'index'} options={{ title: 'Home' }} />
            <Tabs.Screen
                name={'statistics'}
                options={{ title: 'Statistics' }}
            />
            <Tabs.Screen name={'wallet'} options={{ title: 'Wallet' }} />
            <Tabs.Screen name={'profile'} options={{ title: 'Profile' }} />
        </Tabs>
    )
}

export default TabLayout
