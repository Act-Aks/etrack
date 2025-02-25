import { verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'

export const headerStyles = StyleSheet.create(theme => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: verticalScale(4),
    },
    title: {
        flex: 1,
        textAlign: 'center',
    },
    leftIcon: {
        alignSelf: 'flex-start',
    },
    rightIcon: {
        alignSelf: 'flex-end',
    },
    emptyView: {
        width: 40,
    },
}))
