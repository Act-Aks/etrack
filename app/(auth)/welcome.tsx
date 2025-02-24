import { welcomeStyles } from '@/libs/styles'
import { BaseButton, BaseText, ScreenWrapper } from '@/libs/components'
import { TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import { useRouter } from 'expo-router'

const Welcome: React.FC = () => {
    const router = useRouter()

    const handleSignIn = () => router.push('/(auth)/login')
    const handleRegister = () => router.push('/(auth)/register')

    return (
        <ScreenWrapper>
            <View style={welcomeStyles.container}>
                <View>
                    <TouchableOpacity
                        style={welcomeStyles.loginButton}
                        onPress={handleSignIn}
                    >
                        <BaseText fontWeight={'500'}>Sign In</BaseText>
                    </TouchableOpacity>
                    <Animated.Image
                        entering={FadeIn.duration(1000)}
                        source={require('@/assets/images/welcome.png')}
                        style={welcomeStyles.welcomeImage}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={welcomeStyles.footer}>
                    <Animated.View
                        style={welcomeStyles.footerContents}
                        entering={FadeInDown.duration(1000)
                            .springify()
                            .damping(12)}
                    >
                        <BaseText size={30} fontWeight={'800'}>
                            ETrack
                        </BaseText>
                        <BaseText size={30} fontWeight={'800'}>
                            Your expenses today!
                        </BaseText>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.duration(1000)
                            .delay(100)
                            .springify()
                            .damping(12)}
                    >
                        <BaseText
                            size={17}
                            color={'textLight'}
                            style={welcomeStyles.footerText}
                        >
                            Expense must be tracked to manage your finances
                            effectively.
                        </BaseText>
                    </Animated.View>
                    <Animated.View
                        style={welcomeStyles.buttonContainer}
                        entering={FadeInDown.duration(1000)
                            .delay(200)
                            .springify()
                            .damping(12)}
                    >
                        <BaseButton onPress={handleRegister}>
                            <BaseText
                                size={22}
                                color={'neutral900'}
                                fontWeight={'500'}
                            >
                                Get Started
                            </BaseText>
                        </BaseButton>
                    </Animated.View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Welcome
