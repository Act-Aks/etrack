import { AuthProvider } from '@/libs/contexts/AuthContext'
import { QueryProvider } from '@/libs/providers/QueryProvider'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { rootStyles } from '@/libs/styles'
import { Toasts } from '@backpackapp-io/react-native-toast'

const RootLayout: React.FC = () => {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={rootStyles.root}>
                <QueryProvider>
                    <AuthProvider>
                        <Stack screenOptions={{ headerShown: false }} />
                        <Toasts />
                    </AuthProvider>
                </QueryProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    )
}

export default RootLayout
