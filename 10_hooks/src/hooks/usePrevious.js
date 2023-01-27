import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
    const ref = useRef

    useDebugValue("--- CUSTOM HOOK AND USEDEBUGVALUE")
    useDebugValue("Previous num" + ref)

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}