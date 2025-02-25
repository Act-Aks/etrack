import { View } from 'react-native'
import { ModalWrapperProps } from './ModalWrapper.static'
import { modalWrapperStyles } from './ModalWrapper.style'

const ModalWrapper: React.FC<ModalWrapperProps> = ({ style, bg, children }) => {
    // const { bottom } = useSafeAreaInsets()
    return <View style={[modalWrapperStyles.container, style]}>{children}</View>
}

export default ModalWrapper
