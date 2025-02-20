import { rootStyles } from '@/libs/styles'
import { ScreenWrapper } from '@/libs/components'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Image } from 'react-native'

const Root = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => router.push('/(auth)/welcome'), 2000)
    }, [])

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
