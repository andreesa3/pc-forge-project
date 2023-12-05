import { useEffect, useState } from "react"

const UseFetch = (options = {selector:null}) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const update = async () => {
        setError(false);
        setLoading(true)
        try {
            const response = await fetch("http://localhost:5000/products")
            const result = await response.json()
            if(response.ok){
                setData(options.selector !== null ? result[options.selector] : result)
                setLoading(false)
            }else{
                setError("error")
                setLoading(false)
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        update()
    },[]) 
    return {data, error, loading, update}
}

export default UseFetch