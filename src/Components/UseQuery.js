import React, { useState, useEffect } from 'react';

const UseQuery = (callback, ID)=>{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    const FetchData = async(ID)=>{
        try {
            const {data} = await callback(ID);
            setData(data.data);
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        FetchData(ID)
    },[ID])
    return { loading, data, error }
};

export default UseQuery;