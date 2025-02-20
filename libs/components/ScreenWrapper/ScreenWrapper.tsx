import { Platform, StatusBar, useWindowDimensions, View } from 'react-native'
import { ScreenWrapperProps } from './ScreenWrapper.static'
import { screenWrapperStyles } from './ScreenWrapper.style'

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ style, children }) => {
    const { height } = useWindowDimensions()
    const paddingTop = Platform.OS === 'ios' ? height * 0.06 : 50

    return (
        <View style={[screenWrapperStyles.container({ paddingTop }), style]}>
            <StatusBar barStyle={'light-content'} />
            {children}
        </View>
    )
}

export default ScreenWrapper
