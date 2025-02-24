import { login, register, logout } from '@/libs/services/auth'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Toast } from '@/libs/utils/misc'

const handleAuthError = (error: Error) => {
    let errorMessage = error.message
    switch (true) {
        case errorMessage.includes('(auth/invalid-credential)'):
            errorMessage = 'Invalid credentials'
            break
        case errorMessage.includes('(auth/invalid-email)'):
            errorMessage = 'Invalid email'
            break
        case errorMessage.includes('(auth/email-already-in-use)'):
            errorMessage = 'Email already in use'
            break
    }
    return Toast.enqueueError(errorMessage)
}

const useSignIn = () => {
    const {
        error,
        mutateAsync: signIn,
        isPending,
    } = useMutation({
        mutationFn: login,
        mutationKey: ['SignIn'],
        onSuccess: Toast.enqueueSuccess('Successfully logged in'),
        onError: handleAuthError,
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
        onError: handleAuthError,
    })

    return { signUp, error, isLoading: isPending }
}

export const useSignOut = () => {
    const {
        error,
        mutateAsync: signOut,
        isPending,
    } = useMutation({
        mutationFn: logout,
        mutationKey: ['SignOut'],
        onSuccess: Toast.enqueueSuccess('Successfully logged out'),
        onError: handleAuthError,
    })

    return { signOut, error, isLoading: isPending }
}

export type UseSignIn = ReturnType<typeof useSignIn>
export type UseSignUp = ReturnType<typeof useSignUp>
export type UseSignOut = ReturnType<typeof useSignOut>

export const AuthHooks = {
    useSignIn,
    useSignUp,
    useSignOut,
}
