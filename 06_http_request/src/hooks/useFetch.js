import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // refactoring POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    const httpConfig = (data, method) => {
        if(method === 'POST') {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        }

        fetchData()

    }, [url, callFetch])

    useEffect(() => {
        if(method === 'POST'){
            const httpRequest = async() => {
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
    
                const json = await res.json()
    
                setCallFetch(json)
            }

            httpRequest()
        }
    }, [config, method, url])

    return { data, httpConfig };
}