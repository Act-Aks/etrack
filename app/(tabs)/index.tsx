import { BaseButton, BaseText, Header, ScreenWrapper } from '@/libs/components'
import { useAuth } from '@/libs/contexts/AuthContext'
import { View } from 'react-native'

const Home: React.FC = () => {
    const { signOut, isSigningOut, user } = useAuth()

    const handleLogout = async () => {
        await signOut()
    }

    return (
        <ScreenWrapper>
            <Header title={'Home'} />
            <BaseButton onPress={handleLogout}>
                <BaseText>Logout</BaseText>
            </BaseButton>
        </ScreenWrapper>
    )
}

export default Home
