import { PropsWithChildren } from 'react'
import { ViewStyle } from 'react-native'
import { BaseButtonProps } from '../BaseButton/BaseButton.static'

export type TDialogContext = {
    openDialog: (name: string) => void
    closeDialog: () => void
    openedDialogName: string
}

export type DialogComponent = React.FC<PropsWithChildren> & {
    Trigger: React.FC<DialogTriggerProps>
    Content: React.FC<DialogContentProps>
    Close: React.FC<DialogCloseProps>
}

export type DialogContentProps = PropsWithChildren<{
    name: string
    showCloseButton?: boolean
    style?: ViewStyle
}>

export type DialogTriggerProps = PropsWithChildren<{
    opens: string
    asChild?: boolean
}>

export type DialogCloseProps = BaseButtonProps
