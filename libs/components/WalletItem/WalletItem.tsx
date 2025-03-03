import { colors } from '@/libs/constants/theme'
import { formatCurrency } from '@/libs/utils/misc'
import { verticalScale } from '@/libs/utils/styling'
import { Image } from 'expo-image'
import { CaretRight } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import BaseText from '../BaseText/BaseText'
import { WalletItemProps } from './WalletItem.static'
import { walletItemStyles } from './WalletItem.style'

const WalletItem: React.FC<WalletItemProps> = ({ item, index, router }) => {
    const handleOpenWallet = () => {
        return router.push({
            pathname: '/(modals)/wallet-modal',
            params: {
                id: item.id,
                name: item.name,
                image: item.image,
            },
        })
    }

    return (
        <Animated.View
            entering={FadeInDown.delay(index * 50)
                .springify()
                .damping(14)}
        >
            <TouchableOpacity
                style={walletItemStyles.container}
                onPress={handleOpenWallet}
            >
                <View style={walletItemStyles.imageContainer}>
                    <Image
                        style={walletItemStyles.image}
                        source={item.image}
                        contentFit={'cover'}
                        transition={100}
                    />
                </View>
                <View style={walletItemStyles.nameContainer}>
                    <BaseText size={16}>{item.name}</BaseText>
                    <BaseText size={14} color={'neutral400'}>
                        {formatCurrency(item.amount || 0)}
                    </BaseText>
                </View>
                <CaretRight
                    size={verticalScale(20)}
                    weight={'bold'}
                    color={colors.white}
                />
            </TouchableOpacity>
        </Animated.View>
    )
}

export default WalletItem
