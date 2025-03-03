import { env } from '@/libs/constants'
import { ResponseType } from '@/typings'
import axios from 'axios'

export const getCloudinaryImageUploadUrl = () => {
    return `${env.CLOUDINARY_CLOUD_URL}/v1_1/${env.CLOUDINARY_CLOUD_NAME}/image/upload`
}

type UploadToCloudinaryParams = {
    file: { uri?: string } | string
    folderName: string
}

export const uploadToCloudinary = async ({
    file,
    folderName,
}: UploadToCloudinaryParams): Promise<ResponseType> => {
    try {
        if (!file) {
            return { success: true, data: null }
        }
        if (typeof file === 'string') {
            return { success: true, data: file }
        }
        if (file && file.uri) {
            const formData = new FormData()
            formData.append('file', {
                uri: file.uri,
                type: 'image/jpeg',
                name: file.uri.split('/').pop() || 'file.jpg',
            } as any)
            formData.append('upload_preset', env.CLOUDINARY_UPLOAD_PRESET)
            formData.append('folder', folderName)

            const res = await axios.post(
                getCloudinaryImageUploadUrl(),
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            )

            return { success: true, data: res?.data?.secure_url }
        }

        return { success: true, data: null }
    } catch (error: any) {
        return {
            success: false,
            msg: error?.message || 'Failed to upload image',
        }
    }
}
