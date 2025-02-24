import { login, register } from '@/libs/services/auth'
import { useMutation } from '@tanstack/react-query'
import { Alert } from 'react-native'

const useSignIn = () => {
    const {
        error,
        mutateAsync: signIn,
        isPending,
    } = useMutation({
        mutationFn: login,
        mutationKey: ['SignIn'],
        onSuccess: () => {
            Alert.alert('Successfully logged in!')
        },
        onError: (error: any) => {
            Alert.alert(error?.message || 'Failed to login')
        },
    })

    return { signIn, error, isLoading: isPending }
}

const useSignUp = () => {
    const {
        error,
        mutateAsync: signUp,
        isPending,
    } = useMutation({
        mutationFn: register,
        mutationKey: ['SignUp'],
        onSuccess: () => {
            Alert.alert('Successfully signed up!')
        },
        onError: (error: any) => {
            Alert.alert(error?.message || 'Failed to sign up')
        },
    })

    return { signUp, error, isLoading: isPending }
}

export type UseSignIn = ReturnType<typeof useSignIn>
export type UseSignUp = ReturnType<typeof useSignUp>

export const AuthHooks = {
    useSignIn,
    useSignUp,
}
