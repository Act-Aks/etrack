import { useMutation, useQuery } from '@tanstack/react-query'
import { getUser, login, register } from '@/libs/services/auth'

const useSignIn = () => {
    const {
        error,
        mutateAsync: signIn,
        isPending,
    } = useMutation({
        mutationFn: login,
        mutationKey: ['SignIn'],
        onSuccess: () => {
            toast.success('Successfully logged in!')
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
            toast.success('Successfully signed up!')
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
