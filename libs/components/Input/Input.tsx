import { TextInput } from 'react-native'
import { inputStyles } from './Input.style'
import { InputProps } from './Input.static'

const Input: React.FC<InputProps> = ({
    placeholder,
    keyboardType,
    autoCapitalize,
    autoCorrect,
    style,
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            style={[inputStyles.input, style]}
        />
    )
}

export default Input
