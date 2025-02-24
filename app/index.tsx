import { rootStyles } from '@/libs/styles'
import { ScreenWrapper } from '@/libs/components'
import { Image } from 'react-native'

const Root: React.FC = () => {
    return (
        <ScreenWrapper style={rootStyles.container}>
            <Image
                source={require('@/assets/images/splashImage.png')}
                style={rootStyles.logo}
            />
        </ScreenWrapper>
    )
}

export default Root
