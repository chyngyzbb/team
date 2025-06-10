import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddProduct = () => {

    const dispatch=useDispatch()
    const [name,setName]=useState()
    const [price,setPrice]=useState()
    const [url,setUrl]=useState()

    function handleSubmit(e:React.FormEvent){
        e.preventDefault()
        dispatch()
         
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder='Названия' />
            <input type="text"placeholder='Цена' />
            <input type="text" placeholder='URL картины'/>
            <button type='submit'>add</button>
        </form>
    );
};

export default AddProduct;