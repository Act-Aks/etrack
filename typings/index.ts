import { colors } from '@/libs/constants/theme'
import { Timestamp } from 'firebase/firestore'
import { Icon } from 'phosphor-react-native'
import React from 'react'
import { ViewStyle } from 'react-native'

export type AccountOption = {
    title: string
    icon: React.ReactNode
    bgColor: string
    routeName?: any
}

export type ThemeColor = keyof typeof colors

export type User = {
    uid?: string
    email?: string | null
    name: string | null
    image?: any
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

export type UserDataType = {
    name: string
    image?: any
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
    image?: any
    uid?: string
    created?: Date
}
