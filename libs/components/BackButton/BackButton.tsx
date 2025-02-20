import { TouchableOpacity } from 'react-native'
import { BackButtonProps } from './BackButton.static'
import { useRouter } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import { verticalScale } from '@/libs/utils/styling'
import { colors } from '@/libs/constants/theme'
import { backButtonStyles } from './BackButton.style'

const BackButton: React.FC<BackButtonProps> = ({ style, iconSize = 26 }) => {
    const router = useRouter()

    const handleBackPress = () => router.back()

    return (
        <TouchableOpacity
            style={[backButtonStyles.button, style]}
            onPress={handleBackPress}
        >
            <CaretLeft
                size={verticalScale(iconSize)}
                color={colors.white}
                weight={'bold'}
            />
        </TouchableOpacity>
    )
}

export default BackButton
