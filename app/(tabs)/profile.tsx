import {
    BaseText,
    ConfirmationDialog,
    Dialog,
    Header,
    ScreenWrapper,
} from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { useAuth } from '@/libs/contexts/AuthContext'
import { profileStyles } from '@/libs/styles'
import { getImage } from '@/libs/utils/common'
import { verticalScale } from '@/libs/utils/styling'
import { AccountOption } from '@/typings'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import * as Icons from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

enum AccountOptionType {
    EDIT_PROFILE = 'Edit Profile',
    SETTINGS = 'Settings',
    PRIVACY_POLICY = 'Privacy Policy',
    LOGOUT = 'Logout',
}

const accountOptions: AccountOption[] = [
    {
        title: AccountOptionType.EDIT_PROFILE,
        icon: <Icons.User size={26} color={colors.white} weight={'fill'} />,
        routeName: '/(modals)/profile-modal',
        bgColor: '#6366F1',
    },
    {
        title: AccountOptionType.SETTINGS,
        icon: <Icons.GearSix size={26} color={colors.white} weight={'fill'} />,
        bgColor: '#059669',
    },
    {
        title: AccountOptionType.PRIVACY_POLICY,
        icon: <Icons.Lock size={26} color={colors.white} weight={'fill'} />,
        bgColor: colors.neutral600,
    },
    {
        title: AccountOptionType.LOGOUT,
        icon: <Icons.Power size={26} color={colors.white} weight={'fill'} />,
        bgColor: '#E11D48',
    },
]

const Profile: React.FC = () => {
    const { user, signOut, isSigningOut } = useAuth()
    const router = useRouter()

    const handleLogout = async () => {
        await signOut()
    }

    const handleOption = (option: AccountOption) => {
        if (option.routeName) {
            return router.navigate(option.routeName)
        }
    }

    return (
        <ScreenWrapper style={profileStyles.container}>
            <Header title={'Profile'} />
            <View style={profileStyles.userInfo}>
                <View style={profileStyles.avatar}>
                    <Image
                        source={getImage(user?.image)}
                        style={profileStyles.avatar}
                        contentFit={'cover'}
                        transition={100}
                    />
                    {/* <BaseText style={profileStyles.avatarName}>
                        {user?.name?.charAt(0).toUpperCase()}
                    </BaseText> */}
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

            <Dialog>
                <View style={profileStyles.accountOptions}>
                    {accountOptions.map((option, index) => (
                        <Animated.View
                            key={option.title}
                            style={profileStyles.listItem}
                            entering={FadeInDown.delay(index * 100)
                                .springify()
                                .damping(14)}
                        >
                            <Dialog.Trigger
                                opens={option.title}
                                asChild={
                                    !(option.title === AccountOptionType.LOGOUT)
                                }
                            >
                                <TouchableOpacity
                                    disabled={
                                        option.title ===
                                        AccountOptionType.LOGOUT
                                    }
                                    style={profileStyles.flexRow}
                                    onPress={() => handleOption(option)}
                                >
                                    <View
                                        style={profileStyles.listIcon(
                                            option.bgColor,
                                        )}
                                    >
                                        {option.icon}
                                    </View>
                                    <BaseText
                                        size={16}
                                        style={profileStyles.optionText}
                                        fontWeight={'500'}
                                    >
                                        {option.title}
                                    </BaseText>
                                    <Icons.CaretRight
                                        size={verticalScale(20)}
                                        weight={'bold'}
                                        color={colors.white}
                                    />
                                </TouchableOpacity>
                            </Dialog.Trigger>
                        </Animated.View>
                    ))}

                    <ConfirmationDialog
                        name={AccountOptionType.LOGOUT}
                        title={'Confirm'}
                        description={'Are you sure you want to logout?'}
                        primaryButtonTitle={'Logout'}
                        secondaryButtonTitle={'Cancel'}
                        onConfirm={handleLogout}
                        loading={isSigningOut}
                    />
                </View>
            </Dialog>
        </ScreenWrapper>
    )
}

export default Profile
