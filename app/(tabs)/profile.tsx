import { BaseText, Header, ScreenWrapper } from '@/libs/components'
import { useAuth } from '@/libs/contexts/AuthContext'
import { profileStyles } from '@/libs/styles'
import { View } from 'react-native'
import { Image } from 'expo-image'

const Profile: React.FC = () => {
    const { user } = useAuth()

    return (
        <ScreenWrapper style={profileStyles.container}>
            <Header title={'Profile'} />
            <View style={profileStyles.userInfo}>
                <View>
                    <Image
                        source={user?.image}
                        style={profileStyles.avatar}
                        contentFit={'cover'}
                        transition={100}
                    />
                </View>

                <View style={profileStyles.nameConatiner}>
                    <BaseText size={24} fontWeight={'600'} color={'neutral100'}>
                        {user?.name}
                    </BaseText>
                    <BaseText size={15} color={'neutral100'}>
                        {user?.email}
                    </BaseText>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Profile
