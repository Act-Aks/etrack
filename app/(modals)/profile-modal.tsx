import {
    BackButton,
    BaseButton,
    BaseText,
    Header,
    Input,
    ModalWrapper,
} from '@/libs/components'
import { colors } from '@/libs/constants/theme'
import { useAuth } from '@/libs/contexts/AuthContext'
import { AuthHooks } from '@/libs/hooks/auth'
import { modalStyles } from '@/libs/styles'
import { getImage } from '@/libs/utils/common'
import { verticalScale } from '@/libs/utils/styling'
import { UserDataType } from '@/typings'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Pencil } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const ProfileModal: React.FC = () => {
    const router = useRouter()
    const { user, updateUserData } = useAuth()
    const { updateUser, isLoading } = AuthHooks.useUpdateUser()
    const [userData, setUserData] = useState<UserDataType>({
        name: '',
        image: null,
    })

    const isSubmitDisabled =
        userData.name === user?.name && userData.image === user?.image

    useEffect(() => {
        setUserData({
            name: user?.name || '',
            image: user?.image || null,
        })
    }, [user])

    const onSubmit = async () => {
        const userId = user?.uid
        const { name } = userData
        if (!name.trim() || !userId) {
            return
        }

        await updateUser({ userId, userData })
        await updateUserData(userId)

        router.back()
    }

    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        })

        if (!result.canceled) {
            setUserData(prev => ({ ...prev, image: result.assets[0] }))
        }
    }

    return (
        <ModalWrapper>
            <View style={modalStyles.container}>
                <Header title={'Update Profile'} leftIcon={<BackButton />} />
                <ScrollView contentContainerStyle={modalStyles.form}>
                    <View style={modalStyles.avatarContainer}>
                        <Image
                            source={getImage(userData.image)}
                            style={modalStyles.avatar}
                            contentFit={'cover'}
                            transition={100}
                        />
                        <TouchableOpacity
                            onPress={handleImagePicker}
                            style={modalStyles.editIcon}
                        >
                            <Pencil
                                size={verticalScale(20)}
                                color={colors.neutral800}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={modalStyles.inputContainer}>
                        <BaseText color={'neutral200'}>Name</BaseText>
                        <Input
                            placeholder={'Name'}
                            value={userData.name}
                            onChangeText={value =>
                                setUserData({ ...userData, name: value })
                            }
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={modalStyles.footer}>
                <BaseButton
                    onPress={onSubmit}
                    style={modalStyles.button}
                    loading={isLoading}
                    disabled={isSubmitDisabled}
                >
                    <BaseText fontWeight={'700'} size={18} color={'black'}>
                        Update Profile
                    </BaseText>
                </BaseButton>
            </View>
        </ModalWrapper>
    )
}

export default ProfileModal
