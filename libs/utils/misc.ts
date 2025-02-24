import { toast } from '@backpackapp-io/react-native-toast'

export const Toast = {
    enqueueError: (error: unknown) => {
        let message = 'An unknown error occurred'

        if (
            error &&
            typeof error === 'object' &&
            'message' in error &&
            typeof error.message === 'string'
        ) {
            message = error.message
        } else if (typeof error === 'string') {
            message = error
        }
        toast.error(message, { id: message })
    },
    enqueueSuccess:
        <T>(message: ((data: T) => string) | string) =>
        (data: T) =>
            toast.success(
                typeof message === 'string' ? message : message(data),
            ),
}
