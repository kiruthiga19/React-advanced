import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
   const navigate= useNavigate()
  return (
    <>
    <div>
      order conformed
    </div>
    <button onClick={()=>navigate(-1)}>Go back</button>
    </>
  )
}


