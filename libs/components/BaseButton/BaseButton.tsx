import { TouchableOpacity } from 'react-native'
import Loader from '../Loader/Loader'
import { BaseButtonProps } from './BaseButton.static'
import { buttonStyles } from './BaseButton.style'

const BaseButton: React.FC<BaseButtonProps> = ({
    children,
    style,
    onPress,
    loading = false,
    asChild = false,
    disabled,
}) => {
    return (
        <TouchableOpacity
            style={[buttonStyles.button(loading, disabled), style]}
            onPress={onPress}
            disabled={asChild || disabled}
        >
            {loading ? <Loader /> : children}
        </TouchableOpacity>
    )
}

export default BaseButton
