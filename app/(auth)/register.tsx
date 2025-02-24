import {
    BackButton,
    BaseButton,
    BaseText,
    Input,
    ScreenWrapper,
} from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { useAuth } from '@/libs/contexts/AuthContext'
import { loginStyles } from '@/libs/styles'
import { verticalScale } from '@/libs/utils/styling'
import { useRouter } from 'expo-router'
import { At, Lock, User } from 'phosphor-react-native'
import { useRef } from 'react'
import { Alert, Pressable, View } from 'react-native'

type RegisterInputRefs = {
    name: string
    email: string
    password: string
}

const Register: React.FC = () => {
    const router = useRouter()
    const inputRef = useRef<RegisterInputRefs>({
        name: '',
        email: '',
        password: '',
    })
    const { signUp, isSigningUp } = useAuth()

    const handleRegister = async () => {
        const { name, email, password } = inputRef.current
        if (!name || !email || !password) {
            Alert.alert('Register', 'Please fill in all fields')
            return
        }
        await signUp({ email, password, name })
        router.navigate('/(tabs)')
    }
    const goToLogin = () => {
        router.navigate('/(auth)/login')
    }

    return (
        <ScreenWrapper>
            <View style={loginStyles.container}>
                <BackButton iconSize={28} />

                <View>
                    <BaseText size={30} fontWeight={'800'}>
                        Let's',
                    </BaseText>
                    <BaseText size={30} fontWeight={'800'}>
                        Get Started
                    </BaseText>
                </View>

                <View style={loginStyles.form}>
                    <BaseText size={16} color={'textLighter'}>
                        Create an account to track your expenses
                    </BaseText>
                </View>
                <Input
                    placeholder={'Name'}
                    keyboardType={'default'}
                    autoCapitalize={'none'}
                    onChangeText={text => (inputRef.current.name = text)}
                    icon={
                        <User
                            size={verticalScale(26)}
                            color={colors.neutral300}
                            weight={'fill'}
                        />
                    }
                />
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

                <BaseButton loading={isSigningUp} onPress={handleRegister}>
                    <BaseText fontWeight={'700'} color={'black'} size={21}>
                        Sign Up
                    </BaseText>
                </BaseButton>

                <View style={loginStyles.footer}>
                    <BaseText size={15}>Already have an account?</BaseText>
                    <Pressable onPress={goToLogin}>
                        <BaseText
                            fontWeight={'700'}
                            size={15}
                            color={'primary'}
                        >
                            Login
                        </BaseText>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Register
