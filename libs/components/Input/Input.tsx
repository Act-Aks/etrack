import { TextInput, View } from 'react-native'
import { inputStyles } from './Input.style'
import { InputProps } from './Input.static'
import { colors } from '@/libs/constants/theme'

const Input: React.FC<InputProps> = ({ style, icon, inputRef, ...props }) => {
    return (
        <View style={inputStyles.container}>
            {icon}
            <TextInput
                ref={inputRef}
                placeholderTextColor={colors.neutral400}
                style={[inputStyles.input, style]}
                {...props}
            />
        </View>
    )
}

export default Input
