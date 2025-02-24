import { AuthProvider } from '@/libs/contexts/AuthContext'
import { QueryProvider } from '@/libs/providers/QueryProvider'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <QueryProvider>
            <AuthProvider>
                <Stack screenOptions={{ headerShown: false }} />
            </AuthProvider>
        </QueryProvider>
    )
}

export default RootLayout
