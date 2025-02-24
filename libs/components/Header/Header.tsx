import BaseText from '@/libs/components/BaseText/BaseText'
import { View } from 'react-native'
import { HeaderProps } from './Header.static'
import { headerStyles } from './Header.style'

const Header: React.FC<HeaderProps> = ({
    title = '',
    style,
    leftIcon,
    rightIcon,
}) => {
    return (
        <View style={[headerStyles.container, style]}>
            {leftIcon && <View style={headerStyles.leftIcon}>{leftIcon}</View>}
            {title && (
                <BaseText
                    size={22}
                    fontWeight={'600'}
                    style={headerStyles.title}
                >
                    {title}
                </BaseText>
            )}
            {rightIcon && (
                <View style={headerStyles.rightIcon}>{rightIcon}</View>
            )}
        </View>
    )
}

export default Header
