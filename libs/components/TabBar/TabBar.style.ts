import { verticalScale } from '@/libs/utils/styling'
import { Platform } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

export const tabBarStyles = StyleSheet.create(theme => ({
    tabBar: {
        flexDirection: 'row',
        width: '100%',
        height: verticalScale(Platform.OS === 'ios' ? 73 : 55),
        backgroundColor: theme.colors.neutral800,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopColor: theme.colors.neutral700,
        borderTopWidth: 1,
    },
    tabBarItem: {
        marginBottom: verticalScale(
            Platform.OS === 'ios' ? theme.spacing.y10 : theme.spacing.y5,
        ),
        justifyContent: 'center',
        alignItems: 'center',
    },
}))
