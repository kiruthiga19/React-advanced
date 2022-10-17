import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading,setLoading] = useState(true)
    const[error, setErroe] = useState('')
    const [post,setPost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setErroe('')

        })
        .catch(error =>{
            setLoading(false)
            setPost({})
            setErroe("something went wrong")
        })
    },[])
  return (
    <div>
      {loading ? "loading": post.title}
      {error ? error:null}
    </div>
  )
}

export default DataFetchingOne
