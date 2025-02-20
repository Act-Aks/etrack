import { BaseTextProps, DEFAULT_TEXT_SIZE } from './BaseText.static'
import { Text } from 'react-native'
import { textStyle } from './BaseText.style'

const BaseText: React.FC<BaseTextProps> = ({
    children,
    style,
    textProps,
    ...restProps
}) => {
    return (
        <Text style={[textStyle.text(restProps), style]} {...textProps}>
            {children}
        </Text>
    )
}

export default BaseText
