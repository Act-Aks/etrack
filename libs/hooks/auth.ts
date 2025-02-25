import {
    updateUser as editUser,
    login,
    logout,
    register,
} from '@/libs/services/auth'
import { Toast } from '@/libs/utils/misc'
import { useMutation } from '@tanstack/react-query'
import { Keys } from '../constants/keys'

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
        mutationKey: [Keys.MUTATION.SIGN_IN],
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
        mutationKey: [Keys.MUTATION.SIGN_UP],
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
        mutationKey: [Keys.MUTATION.SIGN_OUT],
        onSuccess: Toast.enqueueSuccess('Successfully logged out'),
        onError: handleAuthError,
    })

    return { signOut, error, isLoading: isPending }
}

const useUpdateUser = () => {
    const {
        mutateAsync: updateUser,
        isPending,
        error,
    } = useMutation({
        mutationFn: editUser,
        mutationKey: [Keys.MUTATION.UPDATE_USER],
        onSuccess: Toast.enqueueSuccess('Successfully updated user'),
        onError: Toast.enqueueError,
    })
    return { updateUser, isLoading: isPending, error }
}

export type UseSignIn = ReturnType<typeof useSignIn>
export type UseSignUp = ReturnType<typeof useSignUp>
export type UseSignOut = ReturnType<typeof useSignOut>
export type UseUpdateUser = ReturnType<typeof useUpdateUser>

export const AuthHooks = {
    useSignIn,
    useSignUp,
    useSignOut,
    useUpdateUser,
}
