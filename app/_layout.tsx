import { AuthProvider } from '@/libs/contexts/AuthContext'
import { QueryProvider } from '@/libs/providers/QueryProvider'
import { rootStyles } from '@/libs/styles'
import { Toasts } from '@backpackapp-io/react-native-toast'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootLayout: React.FC = () => {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={rootStyles.root}>
                <QueryProvider>
                    <AuthProvider>
                        <Stack screenOptions={{ headerShown: false }}>
                            <Stack.Screen
                                name={'(modals)/profile-modal'}
                                options={{ presentation: 'modal' }}
                            />
                            <Stack.Screen
                                name={'(modals)/wallet-modal'}
                                options={{ presentation: 'modal' }}
                            />
                        </Stack>
                        <Toasts />
                    </AuthProvider>
                </QueryProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    )
}

export default RootLayout
