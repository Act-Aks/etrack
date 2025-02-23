import { TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native'

export type InputProps = TextInputProps & {
    icon?: React.ReactNode
    containerStyle?: ViewStyle
    inputStyle?: TextStyle
    inputRef?: React.RefObject<TextInput>
}
