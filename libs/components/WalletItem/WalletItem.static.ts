import { WalletType } from '@/typings'
import { Router } from 'expo-router'

export type WalletItemProps = {
    item: WalletType
    index: number
    router: Router
}
