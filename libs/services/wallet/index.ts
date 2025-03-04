import { firestore } from '@/libs/configs/firebase'
import { WalletType } from '@/typings'
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { uploadToCloudinary } from '../image'

type WalletInput = Partial<WalletType>

export const createOrUpdateWallet = async (input: WalletInput) => {
    try {
        let wallet = { ...input }
        if (wallet.image) {
            const wiUploaded = await uploadToCloudinary({
                file: wallet.image,
                folderName: 'wallets',
            })
            if (!wiUploaded.success) {
                throw new Error('Failed to upload image')
            }
            wallet.image = wiUploaded.data
        }

        if (!wallet?.id) {
            /* New Wallet */
            wallet.amount = 0
            wallet.totalIncome = 0
            wallet.totalExpenses = 0
            wallet.created = new Date()
        }

        const walletDocRef = wallet?.id
            ? doc(firestore, 'wallets', wallet.id)
            : doc(collection(firestore, 'wallets'))
        await setDoc(walletDocRef, wallet, { merge: true })

        return {
            ...wallet,
            id: walletDocRef.id,
        }
    } catch (error: any) {
        throw new Error(error?.message || 'Failed to create or update wallet')
    }
}

export const deleteWallet = async (walletId: string) => {
    try {
        const walletDocRef = doc(firestore, 'wallets', walletId)
        await deleteDoc(walletDocRef)
        /* TODO: Delete related transactions */
    } catch (error: any) {
        throw new Error(error?.message || 'Failed to delete wallet')
    }
}
