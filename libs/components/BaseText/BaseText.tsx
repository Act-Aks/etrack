import { Text } from 'react-native'
import { BaseTextProps } from './BaseText.static'
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
