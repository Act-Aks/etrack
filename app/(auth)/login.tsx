import {
    BackButton,
    BaseButton,
    BaseText,
    Input,
    ScreenWrapper,
} from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { loginStyles } from '@/libs/styles'
import { verticalScale } from '@/libs/utils/styling'
import { useRouter } from 'expo-router'
import { At, Lock } from 'phosphor-react-native'
import { useRef, useState } from 'react'
import { Alert, Pressable, View } from 'react-native'

type LoginInputRefs = {
    email: string
    password: string
}

const Login = () => {
    const router = useRouter()
    const inputRef = useRef<LoginInputRefs>({ email: '', password: '' })
    const [loading, setLoading] = useState<boolean>(false)

    const handleLogin = () => {
        if (!inputRef.current.email || !inputRef.current.password) {
            Alert.alert('Login', 'Please fill in all fields')
            return
        }
        // Handle login logic here
    }
    const goToSignUp = () => {
        router.navigate('/(auth)/register')
    }

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
                    <BaseText size={16} color={'textLighter'}>
                        Login to track your expenses
                    </BaseText>
                </View>
                <Input
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    onChangeText={text => (inputRef.current.email = text)}
                    icon={
                        <At
                            size={verticalScale(26)}
                            color={colors.neutral300}
                            weight={'fill'}
                        />
                    }
                />
                <Input
                    placeholder={'Password'}
                    keyboardType={'default'}
                    autoCapitalize={'none'}
                    onChangeText={text => (inputRef.current.password = text)}
                    secureTextEntry
                    icon={
                        <Lock
                            size={verticalScale(26)}
                            color={colors.neutral300}
                            weight={'fill'}
                        />
                    }
                />

                <BaseText
                    size={14}
                    color={'text'}
                    style={loginStyles.forgotPassword}
                >
                    Forgot Password?
                </BaseText>

                <BaseButton loading={loading} onPress={handleLogin}>
                    <BaseText fontWeight={'700'} color={'black'} size={21}>
                        Login
                    </BaseText>
                </BaseButton>

                <View style={loginStyles.footer}>
                    <BaseText size={15}>Don't have an account?</BaseText>
                    <Pressable onPress={goToSignUp}>
                        <BaseText
                            fontWeight={'700'}
                            size={15}
                            color={'primary'}
                        >
                            Sign Up
                        </BaseText>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Login
