import { WalletType } from '@/typings'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { orderBy, where } from 'firebase/firestore'
import { CollectionNames } from '../constants/collection'
import { Keys } from '../constants/keys'
import { createOrUpdateWallet } from '../services/wallet'
import { Toast } from '../utils/misc'
import { useCustomQuery } from './useCustomQuery'

const useWallet = () => {
    const queryClient = useQueryClient()
    const {
        mutateAsync: modifyWallet,
        isPending,
        error,
    } = useMutation({
        mutationFn: createOrUpdateWallet,
        mutationKey: [Keys.MUTATION.WALLET],
        onSuccess: Toast.enqueueSuccess('Wallet updated successfully'),
        onError: Toast.enqueueError,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [Keys.QUERY.WALLETS] })
        },
    })

    return {
        modifyWallet,
        isLoading: isPending,
        error,
    }
}

const useGetWallets = (userId: string) => {
    const { data, error, isLoading } = useCustomQuery<WalletType>({
        collectionName: CollectionNames.WALLETS,
        constraints: [where('uid', '==', userId), orderBy('created', 'desc')],
    })

    return {
        wallets: data,
        error,
        isLoading,
    }
}

export type UseWallet = ReturnType<typeof useWallet>
export type UseGetWallets = ReturnType<typeof useGetWallets>

export const WalletHooks = {
    useWallet,
    useGetWallets,
}
