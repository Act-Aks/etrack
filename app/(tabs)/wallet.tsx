import { BaseText, ScreenWrapper, Skeleton } from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { useAuth } from '@/libs/contexts/AuthContext'
import { WalletHooks } from '@/libs/hooks/wallet'
import { walletStyles } from '@/libs/styles'
import { formatCurrency } from '@/libs/utils/misc'
import { verticalScale } from '@/libs/utils/styling'
import { useRouter } from 'expo-router'
import { PlusCircle } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'

const Wallet: React.FC = () => {
    const router = useRouter()
    const { user } = useAuth()
    const { wallets, error, isLoading } = WalletHooks.useGetWallets(
        user?.uid || '',
    )

    const handleAddWallet = () => {
        return router.push('/(modals)/wallet-modal')
    }

    return (
        <ScreenWrapper style={walletStyles.container}>
            <View style={walletStyles.contents}>
                <View style={walletStyles.balance}>
                    <View style={{ alignItems: 'center' }}>
                        <BaseText size={45} fontWeight={'500'}>
                            {formatCurrency(0)}
                        </BaseText>
                        <BaseText size={16} color={'neutral300'}>
                            Total Balance
                        </BaseText>
                    </View>
                </View>

                <View style={walletStyles.wallets}>
                    <View style={walletStyles.flexRow}>
                        <BaseText size={20} fontWeight={'500'}>
                            My Wallets
                        </BaseText>
                        <TouchableOpacity onPress={handleAddWallet}>
                            <PlusCircle
                                size={verticalScale(30)}
                                weight={'fill'}
                                color={colors.primary}
                            />
                        </TouchableOpacity>
                    </View>
                    {isLoading && (
                        <View style={walletStyles.skeletonContainer}>
                            {Array.from(
                                { length: 3 },
                                (_, index) => index + 1,
                            ).map(num => (
                                <View key={num} style={walletStyles.item}>
                                    <Skeleton height={24} width={'30%'} />
                                    <Skeleton height={40} />
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Wallet
