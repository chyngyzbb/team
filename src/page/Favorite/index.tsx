import React from 'react';
import { useSelector } from 'react-redux';

const Favorite = () => {
    const user=useSelector((state)=>state.product.products)
    let res=user.filter((el)=>el.user===el.user)
    console.log(res);
    
    return (
        <div>
            {user.map((el)=>(
               <p>{el.user}</p>
            ))}
        </div>
    );
};

export default Favorite;