import { scale, verticalScale } from '@/libs/utils/styling'
import { StyleSheet } from 'react-native-unistyles'

export const rootStyles = StyleSheet.create({
    root: {
        flex: 1,
    },
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

export const loginStyles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        gap: theme.spacing.y30,
        paddingHorizontal: theme.spacing.x20,
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    form: {
        gap: theme.spacing.y20,
    },
    forgotPassword: {
        color: theme.colors.text,
        fontWeight: '500',
        textAlign: 'right',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        color: theme.colors.text,
        fontSize: verticalScale(15),
        textAlign: 'center',
    },
}))

export const profileStyles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        paddingHorizontal: theme.spacing.x20,
    },
    userInfo: {
        marginTop: verticalScale(30),
        alignSelf: 'center',
        gap: theme.spacing.y15,
    },
    avatarContainer: {
        alignSelf: 'center',
        position: 'relative',
    },
    avatar: {
        alignSelf: 'center',
        backgroundColor: theme.colors.neutral300,
        height: verticalScale(120),
        width: verticalScale(120),
        borderRadius: 200,
    },
    avatarName: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: '900',
        fontSize: verticalScale(100),
        color: theme.colors.black,
    },
    editIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: theme.colors.neutral100,
        borderRadius: 50,
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        padding: 6,
    },
    nameConatiner: {
        gap: verticalScale(4),
        alignItems: 'center',
    },
    listIcon: bgColor => ({
        height: verticalScale(44),
        width: verticalScale(44),
        backgroundColor: bgColor || theme.colors.neutral500,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.radius.r15,
        borderCurve: 'continuous',
    }),
    listItem: {
        marginBottom: verticalScale(17),
    },
    accountOptions: {
        marginTop: theme.spacing.y35,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing.x10,
    },
    optionText: {
        flex: 1,
    },
    logoutDialogContainer: {
        gap: theme.spacing.y15,
    },
    logoutDialogTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.x7,
    },
    logoutDialogButtonContainer: {
        flexDirection: 'row',
        gap: theme.spacing.x12,
    },
    logoutButton: {
        flex: 1,
        backgroundColor: theme.colors.rose,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
}))

export const profileModalStyles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: theme.spacing.x20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: scale(12),
        paddingHorizontal: theme.spacing.x20,
        paddingTop: theme.spacing.y15,
        borderTopColor: theme.colors.neutral700,
        marginBottom: theme.spacing.y5,
        borderTopWidth: 1,
    },
    button: {
        flex: 1,
    },
    form: {
        gap: theme.spacing.y30,
        marginTop: theme.spacing.y15,
    },
    avatarContainer: {
        position: 'relative',
        alignSelf: 'center',
    },
    avatar: {
        height: verticalScale(130),
        aspectRatio: 1,
        borderRadius: 200,
        backgroundColor: theme.colors.neutral300,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: theme.colors.neutral500,
    },
    editIcon: {
        position: 'absolute',
        bottom: theme.spacing.y5,
        right: theme.spacing.y7,
        borderRadius: theme.radius.r30,
        backgroundColor: theme.colors.neutral100,
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        padding: theme.spacing.y7,
    },
    inputContainer: {
        gap: theme.spacing.y10,
    },
}))

export const walletStyles = StyleSheet.create(theme => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black,
    },
    contents: {
        flex: 1,
        justifyContent: 'space-between',
    },
    balance: {
        height: verticalScale(160),
        backgroundColor: theme.colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignCenter: {
        alignItems: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.y10,
    },
    wallets: {
        flex: 1,
        backgroundColor: theme.colors.neutral900,
        borderTopRightRadius: theme.radius.r30,
        borderTopLeftRadius: theme.radius.r30,
        padding: theme.spacing.x20,
        paddingTop: theme.spacing.x25,
    },
    listStyle: {
        paddingBottom: theme.spacing.y25,
        paddingTop: theme.spacing.y15,
    },
    skeletonContainer: {
        flex: 1,
        backgroundColor: theme.colors.neutral900,
        gap: theme.spacing.y20,
    },
    item: {
        gap: theme.spacing.y5,
    },
}))
