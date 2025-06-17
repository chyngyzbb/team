// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import styles from './Detail.module.scss'
import { RootState } from '../../store/store';
import { Product } from '../../api/api';

const DetailPage = () => {
    const {user}=useParams()
    const state=useSelector((state:RootState)=>state.product.products)
    console.log(state);
    
    return (
        <div className='container'>
            <h1>Все товары от: <span style={{color:'blue'}}>{user}</span></h1>
            <div className={styles.root} >
               {state.map((el:Product,idx:number)=>el.user===user?(
                <ProductCard el={el} idx={idx}/>
               ):(''))}
            </div>
        </div>
    );
};

export default DetailPage;