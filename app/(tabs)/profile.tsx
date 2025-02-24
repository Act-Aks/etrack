import { BaseText, Header, ScreenWrapper } from '@/libs/components'
import { useAuth } from '@/libs/contexts/AuthContext'
import { profileStyles } from '@/libs/styles'
import { Touchable, TouchableOpacity, View } from 'react-native'
import { Image } from 'expo-image'
import { getImage } from '@/libs/utils/common'
import { AccountOption } from '@/typings'
import * as Icons from 'phosphor-react-native'
import { colors } from '@/libs/constants/theme'
import { verticalScale } from '@/libs/utils/styling'
import Animated, { FadeInDown } from 'react-native-reanimated'

const accountOptions: AccountOption[] = [
    {
        title: 'Edit Profile',
        icon: <Icons.User size={26} color={colors.white} weight={'fill'} />,
        routeName: '/(modals)/profile-modal',
        bgColor: '#6366F1',
    },
    {
        title: 'Settings',
        icon: <Icons.GearSix size={26} color={colors.white} weight={'fill'} />,
        bgColor: '#059669',
    },
    {
        title: 'Privacy Policy',
        icon: <Icons.Lock size={26} color={colors.white} weight={'fill'} />,
        bgColor: colors.neutral600,
    },
    {
        title: 'Logout',
        icon: <Icons.Power size={26} color={colors.white} weight={'fill'} />,
        bgColor: '#E11D48',
    },
]

const Profile: React.FC = () => {
    const { user } = useAuth()

    const handleOption = (option: AccountOption) => {
        if (option.title === 'Logout') {
        }
    }

    return (
        <ScreenWrapper style={profileStyles.container}>
            <Header title={'Profile'} />
            <View style={profileStyles.userInfo}>
                <View>
                    <Image
                        source={getImage(user?.image)}
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

            <View style={profileStyles.accountOptions}>
                {accountOptions.map((option, index) => (
                    <Animated.View
                        key={option.title}
                        style={profileStyles.listItem}
                        entering={FadeInDown.delay(index * 100)
                            .springify()
                            .damping(14)}
                    >
                        <TouchableOpacity
                            style={profileStyles.flexRow}
                            onPress={() => handleOption(option)}
                        >
                            <View style={profileStyles.listIcon}>
                                {option.icon}
                            </View>
                            <BaseText size={16} fontWeight={'500'}>
                                {option.title}
                            </BaseText>
                            <Icons.CaretRight
                                size={verticalScale(20)}
                                weight={'bold'}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                ))}
            </View>
        </ScreenWrapper>
    )
}

export default Profile
