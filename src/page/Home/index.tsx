import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate=useNavigate()
    const state=useSelector((state :RootState)=>state)
    console.log(state);
    
    return (
        <div>
            <h3 onClick={()=>
            navigate('/profile')
            }>Назад</h3>
            <h1>Home</h1>
            <p>{state.auth.user}</p>
        </div>
    );
};

export default Home;