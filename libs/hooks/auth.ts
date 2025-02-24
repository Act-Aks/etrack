import { login, register } from '@/libs/services/auth'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Toast } from '@/libs/utils/misc'

const useSignIn = () => {
    const {
        error,
        mutateAsync: signIn,
        isPending,
    } = useMutation({
        mutationFn: login,
        mutationKey: ['SignIn'],
        onSuccess: Toast.enqueueSuccess('Successfully logged in'),
        onError: (error: any) =>
            Toast.enqueueError(error?.message || 'Failed to login'),
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
        onSuccess: Toast.enqueueSuccess('Successfully signed up!'),
        onError: (error: any) =>
            Toast.enqueueError(error?.message || 'Failed to sign up'),
    })

    return { signUp, error, isLoading: isPending }
}

export type UseSignIn = ReturnType<typeof useSignIn>
export type UseSignUp = ReturnType<typeof useSignUp>

export const AuthHooks = {
    useSignIn,
    useSignUp,
}
