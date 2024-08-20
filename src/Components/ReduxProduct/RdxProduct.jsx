import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../Redux/Slice/ProductSlice'

const RdxProduct = () => {

let dispatch=useDispatch()

useEffect(()=>{
dispatch(fetchProduct())
},[])

let {data}=useSelector(state=>state.fetchdata)
console.log("the api data",data);


  return (
    <div>RdxProduct

      <h1>redux data</h1>
      {
        data.map((item)=>(
          <p key={item.id}>
            <h6>{item.title}</h6>

          </p>

        ))
      }
    </div>
  )
}

export default RdxProduct