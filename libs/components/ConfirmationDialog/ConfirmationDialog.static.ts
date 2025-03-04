import { ViewStyle } from 'react-native'

export type ConfirmationDialogProps = {
    title: string
    name: string /* Name of the dialog to be displayed */
    description?: string
    loading?: boolean
    primaryButtonTitle?: string
    secondaryButtonTitle?: string
    onCancel?: () => void
    onConfirm?: () => void
    style?: ViewStyle
}
