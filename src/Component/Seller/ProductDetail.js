import React,{Fragment} from 'react'
import Input from '../UI/Input';
import './ProductDetail.css'

 const ProductDetail = () => {
    const submithandler= (event)=>{
        event.preventDefault()

    }
  return (
    <div>
       <h3> Seller feild</h3>
       <form className='form'>
        <Input label='T-Shirt Name:' input={{
            id:'tshirtname',
            type:'text'
        }}
        />
        <Input label='Description:' input={{
            id:'description',
            type:'text'
        }}
        />
        <Input label='Price:' input={{
            id:'price',
            type:'number',

        }}/>
        
        <Input label='L' input={{
            id:'l',
            type:'number'
        }} />
        
        <Input label='M' input={{
            id:'m',
            type:'number'
        }} />
        <Input label='S' input={{
            id:'s',
            type:'number'
        }} />

        <button className='button'>Add Product</button>
       </form>
    </div>
  )
}
export default ProductDetail;