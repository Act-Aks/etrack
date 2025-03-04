import {
    BackButton,
    BaseButton,
    BaseText,
    ConfirmationDialog,
    Dialog,
    Header,
    ImageUpload,
    Input,
    ModalWrapper,
} from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { useAuth } from '@/libs/contexts/AuthContext'
import { WalletHooks } from '@/libs/hooks/wallet'
import { modalStyles } from '@/libs/styles'
import { Toast } from '@/libs/utils/misc'
import { verticalScale } from '@/libs/utils/styling'
import { WalletType } from '@/typings'
import * as ImagePicker from 'expo-image-picker'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Trash } from 'phosphor-react-native'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'

type WalletModalParams =
    | {
          id: string
          name: string
          image: any
      }
    | Record<string, any>

const WalletModal: React.FC = () => {
    const walletToEdit = useLocalSearchParams<WalletModalParams>()
    const router = useRouter()
    const { user } = useAuth()
    const [wallet, setWallet] = useState<WalletType>({
        name: walletToEdit.name || '',
        image: walletToEdit.image || null,
    })
    const { modifyWallet, isLoading } = WalletHooks.useWallet()

    const isSubmitDisabled = wallet.name === user?.name

    const onSubmit = async () => {
        const userId = user?.uid
        const { name, image } = wallet
        if (!name.trim()) {
            return Toast.enqueueError('Please enter a valid wallet name')
        }

        const walletData: WalletType = {
            name,
            image,
            uid: userId,
        }
        if (walletToEdit?.id) {
            walletData.id = walletToEdit.id
        }
        await modifyWallet(walletData)
        router.back()
    }
    const onSelect = (image: ImagePicker.ImagePickerAsset) => {
        setWallet(prev => ({ ...prev, image }))
    }
    const onClear = () => {
        setWallet(prev => ({ ...prev, image: null }))
    }

    return (
        <ModalWrapper>
            <View style={modalStyles.container}>
                <Header
                    title={walletToEdit?.id ? 'Update Wallet' : 'New Wallet'}
                    leftIcon={<BackButton />}
                />
                <ScrollView contentContainerStyle={modalStyles.form}>
                    <View style={modalStyles.inputContainer}>
                        <BaseText color={'neutral200'}>Wallet Name</BaseText>
                        <Input
                            placeholder={'Salary'}
                            value={wallet.name}
                            onChangeText={value =>
                                setWallet({ ...wallet, name: value })
                            }
                        />
                    </View>
                    <View style={modalStyles.inputContainer}>
                        <BaseText color={'neutral200'}>Wallet Icon</BaseText>
                        <ImageUpload
                            placeholder={'Upload image'}
                            file={wallet.image}
                            onSelect={onSelect}
                            onClear={onClear}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={modalStyles.footer}>
                <Dialog>
                    <Dialog.Trigger opens={'delete'}>
                        {walletToEdit?.id && (
                            <BaseButton
                                style={modalStyles.deleteButton}
                                asChild
                            >
                                <Trash
                                    color={colors.white}
                                    size={verticalScale(24)}
                                    weight={'bold'}
                                />
                            </BaseButton>
                        )}
                    </Dialog.Trigger>

                    <ConfirmationDialog
                        name={'delete'}
                        title={'Confirm'}
                        description={
                            'Are you sure you want to delete this wallet?'
                        }
                        primaryButtonTitle={'Delete'}
                        secondaryButtonTitle={'Cancel'}
                        style={modalStyles.dialog}
                    />
                </Dialog>

                <BaseButton
                    onPress={onSubmit}
                    style={modalStyles.button}
                    loading={isLoading}
                    disabled={isSubmitDisabled}
                >
                    <BaseText fontWeight={'700'} size={18} color={'black'}>
                        {walletToEdit?.id ? 'Update wallet' : 'Add wallet'}
                    </BaseText>
                </BaseButton>
            </View>
        </ModalWrapper>
    )
}

export default WalletModal
