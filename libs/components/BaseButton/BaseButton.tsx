import { TouchableOpacity } from 'react-native'
import { BaseButtonProps } from './BaseButton.static'
import { buttonStyles } from './BaseButton.style'
import Loader from '../Loader/Loader'

const BaseButton: React.FC<BaseButtonProps> = ({
    children,
    style,
    onPress,
    loading = false,
}) => {
    return (
        <TouchableOpacity
            style={[buttonStyles.button(loading), style]}
            onPress={onPress}
        >
            {loading ? <Loader /> : children}
        </TouchableOpacity>
    )
}

export default BaseButton
