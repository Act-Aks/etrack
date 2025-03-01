import BaseText from '@/libs/components/BaseText/BaseText'
import { TouchableOpacity, View } from 'react-native'
import { ImageUploadProps } from './ImageUpload.static'
import { UploadSimple, XCircle } from 'phosphor-react-native'
import { colors } from '@/libs/constants/theme'
import { imageUploadStyles } from './ImageUpload.style'
import { Image } from 'expo-image'
import { getFilePath } from '@/libs/utils/common'
import { verticalScale } from '@/libs/utils/styling'
import * as ImagePicker from 'expo-image-picker'

const ImageUpload: React.FC<ImageUploadProps> = ({
    file,
    onSelect,
    onClear,
    containerStyle = {},
    imageStyle = {},
    placeholder = '',
}) => {
    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        })

        if (!result.canceled) {
            onSelect(result.assets[0])
        }
    }

    return (
        <View style={containerStyle}>
            {!file ? (
                <TouchableOpacity
                    style={[imageUploadStyles.inputContainer, containerStyle]}
                    onPress={handleImagePicker}
                >
                    <UploadSimple color={colors.neutral200} />
                    {placeholder && (
                        <BaseText size={15}>{placeholder}</BaseText>
                    )}
                </TouchableOpacity>
            ) : (
                <View style={[imageUploadStyles.imageContainer, imageStyle]}>
                    <Image
                        source={getFilePath(file)}
                        style={imageUploadStyles.image}
                        contentFit={'cover'}
                        transition={100}
                    />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={imageUploadStyles.clearIcon}
                        onPress={onClear}
                    >
                        <XCircle
                            size={verticalScale(24)}
                            color={colors.white}
                            weight={'fill'}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default ImageUpload
