import { verticalScale } from '@/libs/utils/styling'
import { Platform } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

export const tabBarItemStyles = StyleSheet.create(theme => ({
    tabBarItem: {
        marginBottom: verticalScale(
            Platform.OS === 'ios' ? theme.spacing.y10 : theme.spacing.y5,
        ),
        justifyContent: 'center',
        alignItems: 'center',
    },
}))
