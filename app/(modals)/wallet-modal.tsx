import {
    BackButton,
    BaseButton,
    BaseText,
    Header,
    ImageUpload,
    Input,
    ModalWrapper,
} from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { useAuth } from '@/libs/contexts/AuthContext'
import { AuthHooks } from '@/libs/hooks/auth'
import { profileModalStyles } from '@/libs/styles'
import { getImage } from '@/libs/utils/common'
import { verticalScale } from '@/libs/utils/styling'
import { UserDataType, WalletType } from '@/typings'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Pencil } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const WalletModal: React.FC = () => {
    const router = useRouter()
    const { user, updateUserData } = useAuth()
    const { updateUser, isLoading } = AuthHooks.useUpdateUser()
    const [wallet, setWallet] = useState<WalletType>({
        name: '',
        image: null,
    })

    const isSubmitDisabled = wallet.name === user?.name

    const onSubmit = async () => {
        const userId = user?.uid
        const { name, image } = wallet
        if (!name.trim() || !userId) {
            return
        }

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
            <View style={profileModalStyles.container}>
                <Header title={'New Wallet'} leftIcon={<BackButton />} />
                <ScrollView contentContainerStyle={profileModalStyles.form}>
                    <View style={profileModalStyles.inputContainer}>
                        <BaseText color={'neutral200'}>Wallet Name</BaseText>
                        <Input
                            placeholder={'Salary'}
                            value={wallet.name}
                            onChangeText={value =>
                                setWallet({ ...wallet, name: value })
                            }
                        />
                    </View>
                    <View style={profileModalStyles.inputContainer}>
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
            <View style={profileModalStyles.footer}>
                <BaseButton
                    onPress={onSubmit}
                    style={profileModalStyles.button}
                    loading={isLoading}
                    disabled={isSubmitDisabled}
                >
                    <BaseText fontWeight={'700'} size={18} color={'black'}>
                        Add Wallet
                    </BaseText>
                </BaseButton>
            </View>
        </ModalWrapper>
    )
}

export default WalletModal
