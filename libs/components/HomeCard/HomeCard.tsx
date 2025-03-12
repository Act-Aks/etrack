import BaseText from '@/libs/components/BaseText/BaseText'
import { ImageBackground } from 'expo-image'
import { homeCardStyles } from './HomeCard.style'
import { View } from 'react-native'
import {
    ArrowDown,
    Basket,
    DotsThree,
    DotsThreeOutline,
} from 'phosphor-react-native'
import { verticalScale } from '@/libs/utils/styling'
import { colors } from '@/libs/constants/theme'
import { formatCurrency } from '@/libs/utils/misc'

const HomeCard = () => {
    return (
        <ImageBackground
            source={'@/assets/images/card.png'}
            style={homeCardStyles.bgImage}
        >
            <View style={homeCardStyles.container}>
                <View>
                    <View style={homeCardStyles.totalBalance}>
                        <BaseText
                            color={'neutral300'}
                            size={17}
                            fontWeight={'500'}
                        >
                            Total Balance
                        </BaseText>
                        <DotsThreeOutline
                            size={verticalScale(24)}
                            color={colors.black}
                            weight={'fill'}
                        />
                    </View>
                    <BaseText color={'black'} size={30} fontWeight={'bold'}>
                        {formatCurrency(20000)}
                    </BaseText>
                </View>

                <View style={homeCardStyles.stats}>
                    <View style={homeCardStyles.gap}>
                        <View style={homeCardStyles.income}>
                            <View style={homeCardStyles.statsIcon}>
                                <ArrowDown
                                    size={verticalScale(16)}
                                    color={colors.black}
                                    weight={'bold'}
                                />
                            </View>
                            <BaseText
                                color={'neutral700'}
                                fontWeight={'500'}
                                size={verticalScale(16)}
                            >
                                Income
                            </BaseText>
                        </View>
                        <View style={homeCardStyles.alignCenter}>
                            <BaseText
                                color={'green'}
                                fontWeight={'600'}
                                size={verticalScale(17)}
                            >
                                {formatCurrency(20000)}
                            </BaseText>
                        </View>
                    </View>
                    <View style={homeCardStyles.gap}>
                        <View style={homeCardStyles.expenses}>
                            <View style={homeCardStyles.statsIcon}>
                                <ArrowDown
                                    size={verticalScale(16)}
                                    color={colors.black}
                                    weight={'bold'}
                                />
                            </View>
                            <BaseText
                                color={'neutral700'}
                                fontWeight={'500'}
                                size={verticalScale(16)}
                            >
                                Expense
                            </BaseText>
                        </View>
                        <View style={homeCardStyles.alignCenter}>
                            <BaseText
                                color={'rose'}
                                fontWeight={'600'}
                                size={verticalScale(17)}
                            >
                                {formatCurrency(20000)}
                            </BaseText>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default HomeCard
