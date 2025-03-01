import { BaseText, ScreenWrapper } from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { walletStyles } from '@/libs/styles'
import { formatCurrency } from '@/libs/utils/misc'
import { verticalScale } from '@/libs/utils/styling'
import { useRouter } from 'expo-router'
import { PlusCircle } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'

const Wallet: React.FC = () => {
    const router = useRouter()
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
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Wallet
