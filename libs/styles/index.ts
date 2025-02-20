import { verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'

export const rootStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: '20%',
        aspectRatio: 1,
    },
})

export const welcomeStyles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    welcomeImage: {
        width: '100%',
        height: verticalScale(300),
        marginTop: verticalScale(100),
        alignSelf: 'center',
    },
    loginButton: {
        alignSelf: 'flex-end',
        marginRight: theme.spacing.x10,
        marginTop: theme.spacing.x10,
    },
    footer: {
        backgroundColor: theme.colors.neutral900,
        alignItems: 'center',
        paddingTop: verticalScale(30),
        paddingBottom: verticalScale(45),
        gap: theme.spacing.y20,
        shadowColor: theme.colors.white,
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.15,
        shadowRadius: 25,
        elevation: 10,
    },
    footerContents: {
        alignItems: 'center',
    },
    footerText: {
        textAlign: 'center',
    },
    buttonContainer: {
        paddingHorizontal: theme.spacing.x25,
        width: '100%',
    },
}))
