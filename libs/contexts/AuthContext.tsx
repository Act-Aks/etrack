import { getUser } from '@/libs/services/auth'
import { User } from '@/typings'
import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'
import { AuthHooks, UseSignIn, UseSignUp } from '../hooks/auth'

type TAuthContext = {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User>>
    signIn: UseSignIn['signIn']
    signUp: UseSignUp['signUp']
    updateUser: (userId: string) => Promise<void>
    isSigningIn: boolean
    isSigningUp: boolean
}

const AuthContext = createContext<TAuthContext | null>(null)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const { signIn, isLoading: isSigningIn } = AuthHooks.useSignIn()
    const { signUp, isLoading: isSigningUp } = AuthHooks.useSignUp()

    const updateUser = useCallback(async (uid: string) => {
        try {
            const user = await getUser(uid)
            setUser(user)
        } catch (error: any) {
            console.error(error)
        }
    }, [])

    const contextValues: TAuthContext = useMemo(
        () => ({
            user,
            setUser,
            signIn,
            signUp,
            updateUser,
            isSigningIn,
            isSigningUp,
        }),
        [user, updateUser],
    )

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): TAuthContext => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
