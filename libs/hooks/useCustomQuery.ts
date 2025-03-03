import { firestore } from '@/libs/configs/firebase'
import { useQuery } from '@tanstack/react-query'
import {
    collection,
    onSnapshot,
    query,
    QueryConstraint,
} from 'firebase/firestore'
import { Toast } from '../utils/misc'

type CustomQueryProps = {
    collectionName: string
    constraints: QueryConstraint[]
}

const createQuery = async <T>(
    collectionName: CustomQueryProps['collectionName'],
    constraints: CustomQueryProps['constraints'],
) => {
    if (!collectionName) {
        return
    }
    const collectionRef = collection(firestore, collectionName)
    const _query = query(collectionRef, ...constraints)

    // Use onSnapshot to get real-time updates
    // However, useQuery expects a promise that resolves with data.
    return new Promise<T[]>((resolve, reject) => {
        onSnapshot(
            _query,
            snapshot => {
                const qData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as T[]
                resolve(qData)
            },
            error => {
                Toast.enqueueError(error.message)
                reject(error)
            },
        )
    })
}

export const useCustomQuery = <T>({
    collectionName,
    constraints = [],
}: CustomQueryProps) => {
    const { data, error, isLoading } = useQuery({
        queryKey: [collectionName],
        queryFn: async () => await createQuery<T>(collectionName, constraints),
        enabled: !!collectionName, // Only fetch if collectionName is defined
    })

    return {
        data,
        error,
        isLoading,
    }
}
