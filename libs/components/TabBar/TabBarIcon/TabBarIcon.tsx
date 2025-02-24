import { colors } from '@/libs/constants/theme'
import { verticalScale } from '@/libs/utils/styling'
import * as Icons from 'phosphor-react-native'
import { IconProps } from 'phosphor-react-native'

export type TabBarIconProps = IconProps & {
    icon: keyof typeof Icons
    isFocused: boolean
}

const TabBarIcon: React.FC<TabBarIconProps> = ({
    icon,
    isFocused,
    ...props
}) => {
    const Icon = Icons[icon] as React.FC<IconProps>
    return (
        <Icon
            size={verticalScale(30)}
            weight={isFocused ? 'fill' : 'regular'}
            color={isFocused ? colors.primary : colors.neutral400}
            {...props}
        />
    )
}

export default TabBarIcon
