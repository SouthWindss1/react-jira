import { useEffect, useState } from "react";

const useDebounce = (initValue: any, dealy: number) => {
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