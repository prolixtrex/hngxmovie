import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_API_KEY
        }
    };

    const url = `https://api.themoviedb.org/3/movie/${endpoint}`


    useEffect(() => {
        const getMovies = async () => {
            // setIsLoading(true)
            try {
                const response = await axios.request(url, options)
                setData(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        getMovies();
    }, [])


    return { data, isLoading, error }
}

export default useFetch;