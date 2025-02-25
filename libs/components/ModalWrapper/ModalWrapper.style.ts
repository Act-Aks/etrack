import { colors, spacing } from '@/libs/constants/theme'
import { Platform, StyleSheet } from 'react-native'

export const modalWrapperStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral800,
        paddingTop: Platform.OS === 'ios' ? spacing.y15 : spacing.y30,
        paddingBottom: Platform.OS === 'ios' ? spacing.y50 : spacing.y30,
    },
})
