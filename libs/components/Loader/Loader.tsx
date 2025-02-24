import { colors } from '@/libs/constants/theme'
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native'
import { loaderStyles } from './Loader.style'

const Loader: React.FC<ActivityIndicatorProps> = ({
    size = 'large',
    color = colors.primary,
}) => {
    return (
        <View style={loaderStyles.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}

export default Loader
