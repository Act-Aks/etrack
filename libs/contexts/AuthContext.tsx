import { getUser } from '@/libs/services/auth'
import { User } from '@/typings'
import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { AuthHooks, UseSignIn, UseSignOut, UseSignUp } from '@/libs/hooks/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../configs/firebase'
import { useRouter } from 'expo-router'

type TAuthContext = {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User>>
    signIn: UseSignIn['signIn']
    signUp: UseSignUp['signUp']
    signOut: UseSignOut['signOut']
    updateUser: (userId: string) => Promise<void>
    isSigningIn: boolean
    isSigningUp: boolean
    isSigningOut: boolean
}

const AuthContext = createContext<TAuthContext | null>(null)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const { signIn, isLoading: isSigningIn } = AuthHooks.useSignIn()
    const { signUp, isLoading: isSigningUp } = AuthHooks.useSignUp()
    const { signOut, isLoading: isSigningOut } = AuthHooks.useSignOut()

    const router = useRouter()

    const updateUser = useCallback(async (uid: string) => {
        try {
            const user = await getUser(uid)
            setUser(user)
        } catch (error: any) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        const subscription = onAuthStateChanged(auth, async user => {
            if (user) {
                await updateUser(user.uid)
                router.replace('/(tabs)')
            } else {
                setUser(null)
                router.replace('/(auth)/welcome')
            }
        })

        return () => subscription()
    }, [updateUser])

    const contextValues: TAuthContext = useMemo(
        () => ({
            user,
            setUser,
            signIn,
            signUp,
            signOut,
            updateUser,
            isSigningIn,
            isSigningUp,
            isSigningOut,
        }),
        [user, updateUser, isSigningIn, isSigningUp, isSigningOut],
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
