import { Firestore, Timestamp } from 'firebase/firestore'
import { Icon } from 'phosphor-react-native'
import React, { ReactNode } from 'react'
import { TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native'

export type ModalWrapperProps = {
    style?: ViewStyle
    children: React.ReactNode
    bg?: string
}
export type accountOptionType = {
    title: string
    icon: React.ReactNode
    bgColor: string
    routeName?: any
}

export type IconComponent = React.ComponentType<{
    height?: number
    width?: number
    strokeWidth?: number
    color?: string
    fill?: string
}>

export type IconProps = {
    name: string
    color?: string
    size?: number
    strokeWidth?: number
    fill?: string
}

export type HeaderProps = {
    title?: string
    style?: ViewStyle
    leftIcon?: ReactNode
    rightIcon?: ReactNode
}

export type TransactionType = {
    id?: string
    type: string
    amount: number
    category?: string
    date: Date | Timestamp | string
    description?: string
    image?: any
    uid?: string
    walletId: string
}

export type CategoryType = {
    label: string
    value: string
    icon: Icon
    bgColor: string
}
export type ExpenseCategoriesType = {
    [key: string]: CategoryType
}

export type TransactionListType = {
    data: TransactionType[]
    title?: string
    loading?: boolean
    emptyListMessage?: string
}

export type TransactionItemProps = {
    item: TransactionType
    index: number
    handleClick: Function
}

export type ImageUploadProps = {
    file?: any
    onSelect: (file: any) => void
    onClear: () => void
    containerStyle?: ViewStyle
    imageStyle?: ViewStyle
    placeholder?: string
}

export type UserType = {
    uid?: string
    email?: string | null
    name: string | null
    image?: any
} | null

export type UserDataType = {
    name: string
    image?: any
}

export type AuthContextType = {
    user: UserType
    setUser: Function
    login: (
        email: string,
        password: string,
    ) => Promise<{ success: boolean; msg?: string }>
    register: (
        email: string,
        password: string,
        name: string,
    ) => Promise<{ success: boolean; msg?: string }>
    updateUserData: (userId: string) => Promise<void>
}

export type ResponseType = {
    success: boolean
    data?: any
    msg?: string
}

export type WalletType = {
    id?: string
    name: string
    amount?: number
    totalIncome?: number
    totalExpenses?: number
    image: any
    uid?: string
    created?: Date
}
