import { auth, firestore } from '@/libs/configs/firebase'
import { User } from '@/typings'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

type SignInParams = {
    email: string
    password: string
}

type SignUpParams = SignInParams & {
    name: string
}

export const login = async ({ email, password }: SignInParams) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        )
        return userCredential.user
    } catch (error: any) {
        throw new Error(error?.message || 'Failed to login')
    }
}

export const register = async ({ email, password, name }: SignUpParams) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        )
        await setDoc(doc(firestore, 'users', userCredential.user.uid), {
            name,
            email,
            uid: userCredential.user.uid,
        })

        return userCredential.user
    } catch (error: any) {
        throw new Error(error?.message || 'Failed to register')
    }
}

export const getUser = async (userId: string): Promise<User> => {
    try {
        const usersDocRef = doc(firestore, 'users', userId)
        const userDoc = await getDoc(usersDocRef)

        if (!userDoc.exists()) {
            throw new Error('User not found')
        }

        const userData = userDoc.data()

        return {
            uid: userData.uid,
            name: userData.name || null,
            email: userData.email || null,
            image: userData.image || null,
        }
    } catch (error: any) {
        throw new Error(error?.message || 'Failed to get user')
    }
}
