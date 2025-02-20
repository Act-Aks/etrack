import { BackButton, BaseText, ScreenWrapper } from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { loginStyles } from '@/libs/styles'
import { View } from 'react-native'

const Login = () => {
    return (
        <ScreenWrapper>
            <View style={loginStyles.container}>
                <BackButton iconSize={28} />

                <View>
                    <BaseText size={30} fontWeight={'800'}>
                        Hey,
                    </BaseText>
                    <BaseText size={30} fontWeight={'800'}>
                        Welcome back!
                    </BaseText>
                </View>

                <View style={loginStyles.form}>
                    <BaseText size={16} color={colors.textLighter}>
                        Login to track your expenses
                    </BaseText>
                </View>
            </View>
            <BaseText>Login</BaseText>
        </ScreenWrapper>
    )
}

export default Login
