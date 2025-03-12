import {
    BaseButton,
    BaseText,
    Header,
    HomeCard,
    ScreenWrapper,
} from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { useAuth } from '@/libs/contexts/AuthContext'
import { homeStyles } from '@/libs/styles'
import { verticalScale } from '@/libs/utils/styling'
import { MagnifyingGlass } from 'phosphor-react-native'
import { ScrollView, TouchableOpacity, View } from 'react-native'

const Home: React.FC = () => {
    const { signOut, isSigningOut, user } = useAuth()

    const handleLogout = async () => {
        await signOut()
    }

    return (
        <ScreenWrapper>
            <View style={homeStyles.container}>
                <View style={homeStyles.header}>
                    <BaseText size={16}>Hi,</BaseText>
                    <BaseText size={20} fontWeight={'500'}>
                        {user?.name}
                    </BaseText>
                    <TouchableOpacity
                        onPress={handleLogout}
                        style={homeStyles.searchIcon}
                    >
                        <MagnifyingGlass
                            size={verticalScale(24)}
                            color={colors.neutral200}
                            weight={'bold'}
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    contentContainerStyle={homeStyles.scrollViewStyle}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <HomeCard />
                    </View>
                </ScrollView>
            </View>
        </ScreenWrapper>
    )
}

export default Home
