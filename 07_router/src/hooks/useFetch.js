import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)
    const [itemId, setItemId] = useState(null)

    // config the methods
    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        } else if (method === 'DELETE') {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
            })

            setMethod(method)
            setItemId(data)
        }
    }

    // get method
    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)

            try {

                const res = await fetch(url)

                const json = await res.json()

                setData(json)
            } catch (error) {
                setErrors("Something went wrong!")
            }

            setLoading(false)
        }

        fetchData()

    }, [url, callFetch])

    // others methods
    useEffect(() => {
        const httpRequest = async () => {
            
            let json

            if (method === 'POST') {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                const json = await res.json()

                setCallFetch(json)
            } else if (method === 'DELETE') {
                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                json = await res.json()
            }

            setCallFetch(json)
        }

        httpRequest()
    }, [config, method, url])

    return { data, httpConfig, loading, errors };
}