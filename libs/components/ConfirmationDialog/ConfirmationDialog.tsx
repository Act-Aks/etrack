import { View } from 'react-native'
import Dialog from '../Dialog/Dialog'
import { ConfirmationDialogProps } from './ConfirmationDialog.static'
import BaseText from '../BaseText/BaseText'
import { confirmationDialogStyles } from './ConfirmationDialog.style'

/*
 * ConfirmationDialog component is a dialog that displays a confirmation message
 * with two buttons: primary and secondary.
 * It is used to confirm an action before it is executed.
 * Note: This component should be in Dialog
 */
const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    title,
    name,
    description,
    onCancel,
    onConfirm,
    loading,
    primaryButtonTitle = 'Confirm',
    secondaryButtonTitle = 'Cancel',
    style,
}) => {
    return (
        <Dialog.Content name={name} style={style}>
            <View style={confirmationDialogStyles.container}>
                <View style={confirmationDialogStyles.textContainer}>
                    <BaseText
                        size={24}
                        fontWeight={'700'}
                        color={'rose'}
                        textAlign={'center'}
                    >
                        {title}
                    </BaseText>
                    <BaseText size={16} textAlign={'center'}>
                        {description}
                    </BaseText>
                </View>
                <View style={confirmationDialogStyles.buttonContainer}>
                    <Dialog.Close
                        onPress={onCancel}
                        loading={loading}
                        style={confirmationDialogStyles.secondaryButton}
                    >
                        <BaseText>{secondaryButtonTitle}</BaseText>
                    </Dialog.Close>
                    <Dialog.Close
                        onPress={onConfirm}
                        loading={loading}
                        style={confirmationDialogStyles.primaryButton}
                    >
                        <BaseText>{primaryButtonTitle}</BaseText>
                    </Dialog.Close>
                </View>
            </View>
        </Dialog.Content>
    )
}

export default ConfirmationDialog
