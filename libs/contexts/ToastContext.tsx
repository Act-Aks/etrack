import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useReducer,
    useRef,
    useState,
} from 'react'

enum ToastType {
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'info',
}

type Toast = {
    message: string | undefined
    id?: string
    type?: ToastType
    duration?: number
}

type TToastContext = {
    toasts: Toast[]
    success: (message: string, duration?: number) => void
    error: (message: string, duration?: number) => void
    info: (message: string, duration?: number) => void
}

const initialState = {
    toasts: [],
    success: (message: string, duration?: number) => {},
    error: (message: string, duration?: number) => {},
    info: (message: string, duration?: number) => {},
}

const ToastContext = createContext<TToastContext>(initialState)

export const useToast = (): TToastContext => {
    const context = useContext(ToastContext)
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}

type AddToastAction = {
    type: 'ADD'
    payload: {
        type: ToastType
        message: string
        duration?: number
    }
}
type RemoveToastAction = {
    type: 'REMOVE'
}
type ClearToastAction = {
    type: 'CLEAR'
}

type ToastAction = AddToastAction | RemoveToastAction | ClearToastAction

const toastReducer = (state: Toast[], action: ToastAction) => {
    switch (action.type) {
        case 'ADD':
            const isExistingToast = state.some(
                toast => toast.id === action.payload.message,
            )
            if (isExistingToast) {
                return state
            }
            state.push({
                id: action.payload.message,
                message: action.payload.message,
                type: action.payload.type ?? ToastType.SUCCESS,
                duration: action.payload.duration ?? 3000,
            })
            return state
        case 'REMOVE':
            return state.slice(1)
        case 'CLEAR':
            return []

        default:
            return state
    }
}

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, [])

    const success = useCallback((message: string, duration?: number) => {
        dispatch({
            type: 'ADD',
            payload: { type: ToastType.SUCCESS, message, duration },
        })
    }, [])

    const error = useCallback((message: string, duration?: number) => {
        dispatch({
            type: 'ADD',
            payload: { type: ToastType.ERROR, message, duration },
        })
    }, [])

    const info = useCallback((message: string, duration?: number) => {
        dispatch({
            type: 'ADD',
            payload: { type: ToastType.INFO, message, duration },
        })
    }, [])

    const clearToast = useCallback(() => {
        dispatch({
            type: 'REMOVE',
        })
    }, [])

    const values = useRef({
        toasts: state,
        success,
        error,
        info,
        clearToast,
    })

    return (
        <ToastContext.Provider value={values.current}>
            {children}
        </ToastContext.Provider>
    )
}
