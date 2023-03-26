import { useCallback, useEffect, useState } from "react";

interface IUseAsyncReturn<T> {
    loading: boolean;
    data: T | null;
    error: Error | null;
    reCall: () => void;
}

export default function useAsync<T>(
    asyncFunction: () => Promise<T>
): IUseAsyncReturn<T> {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [randomNumber, setRandomNumber] = useState<number>(0);

    useEffect(() => {
        asyncFunction()
            .then((result) => {
                setLoading(false);
                setData(result);
                setError(null);
            })
            .catch((error) => {
                setLoading(false);
                setData(null);
                setError(error);
            });
    }, [asyncFunction, randomNumber]);

    const reCall = useCallback(() => setRandomNumber(Math.random()), []);

    return { loading, data, error, reCall };
}
