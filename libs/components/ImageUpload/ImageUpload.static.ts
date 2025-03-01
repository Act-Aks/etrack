import { ImagePickerAsset } from 'expo-image-picker'
import { ViewStyle } from 'react-native'

export type ImageUploadProps = {
    file?: File | null
    onSelect: (file: ImagePickerAsset) => void
    onClear: () => void
    containerStyle?: ViewStyle
    imageStyle?: ViewStyle
    placeholder?: string
}
