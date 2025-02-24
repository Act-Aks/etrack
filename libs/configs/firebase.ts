import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: 'AIzaSyAjkqyBmDt2zjayFH8iAl4CPpkB24nfltA',
    authDomain: 'act-aks-etrack.firebaseapp.com',
    projectId: 'act-aks-etrack',
    storageBucket: 'act-aks-etrack.firebasestorage.app',
    messagingSenderId: '158297559458',
    appId: '1:158297559458:web:b272b6c530cf42dca4e2fb',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

/* Initialize Firebase Authentication */
const auth = initializeAuth(app, {
    persistence: [getReactNativePersistence(AsyncStorage)],
})

/* Initialize Firebase Firestore */
const firestore = getFirestore(app)

export { auth, firestore }
