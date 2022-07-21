import { useEffect, useState } from "react";

const useDebounce =<T>(initValue:T, dealy: number):T => {
    const [value, setValue] = useState(initValue)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setValue(initValue)
        }, dealy)
        return ()=>{clearTimeout(timeout)}
    }, [initValue, dealy])
    
    return value;
}
export default useDebounce;