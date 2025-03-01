import BaseButton from '@/libs/components/BaseButton/BaseButton'
import { ClosedCaptioning } from 'phosphor-react-native'
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated'
import {
    DialogCloseProps,
    DialogComponent,
    DialogContentProps,
    DialogTriggerProps,
    TDialogContext,
} from './Dialog.static'
import { dialogStyles } from './Dialog.style'

const initialState = {
    openedDialogName: '',
    openDialog: () => {},
    closeDialog: () => {},
}

const DialogContext = createContext<TDialogContext>(initialState)

const useDialog = () => {
    const context = useContext(DialogContext)
    if (!context) {
        throw new Error('useDialog must be used within a DialogProvider')
    }
    return context
}

const Dialog: DialogComponent = ({ children }) => {
    const [openedDialogName, setOpenedDialogName] = useState('')

    const closeDialog = useCallback(() => setOpenedDialogName(''), [])
    const contextValues = useMemo(
        () => ({
            openedDialogName,
            closeDialog,
            openDialog: setOpenedDialogName,
        }),
        [openedDialogName, closeDialog],
    )

    return (
        <DialogContext.Provider value={contextValues}>
            {children}
        </DialogContext.Provider>
    )
}

const DialogTrigger: React.FC<DialogTriggerProps> = ({
    children,
    opens: dialogName,
    asChild = false,
}) => {
    const { openDialog } = useDialog()

    return (
        <TouchableOpacity
            onPress={() => openDialog(dialogName)}
            disabled={asChild}
        >
            {children}
        </TouchableOpacity>
    )
}

const DialogContent: React.FC<DialogContentProps> = ({
    children,
    name,
    showCloseButton,
    style,
}) => {
    const { openedDialogName, closeDialog } = useDialog()

    if (!name || name !== openedDialogName) {
        return null
    }

    return (
        <Modal
            transparent
            key={`${name}-dialog`}
            visible={name === openedDialogName}
            onRequestClose={closeDialog}
            onDismiss={closeDialog}
        >
            <Animated.View
                entering={FadeInDown.duration(1000).springify().damping(14)}
                exiting={FadeOutDown.springify().damping(14)}
                style={dialogStyles.container}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={closeDialog}
                    style={dialogStyles.overlay}
                />
                <View style={[dialogStyles.contentsContainer, style]}>
                    {showCloseButton && (
                        <TouchableOpacity
                            style={dialogStyles.closeButton}
                            onPress={closeDialog}
                        >
                            <ClosedCaptioning />
                        </TouchableOpacity>
                    )}
                    {children}
                </View>
            </Animated.View>
        </Modal>
    )
}

const DialogClose: React.FC<DialogCloseProps> = ({
    children,
    onPress,
    ...props
}) => {
    const { closeDialog } = useDialog()

    const handleOnPress = async () => {
        await onPress?.()
        closeDialog()
    }

    return (
        <BaseButton onPress={handleOnPress} {...props}>
            {children}
        </BaseButton>
    )
}

Dialog.Trigger = DialogTrigger
Dialog.Content = DialogContent
Dialog.Close = DialogClose

export default Dialog
