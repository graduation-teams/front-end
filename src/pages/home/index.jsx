import React, { useEffect, useState } from 'react';
import {Button} from 'antd'
import API from '@api/configureAPI'

function Home(){

    const fetch = async () => {
        const response = await API.post('/auth/register/email',{
            full_name: 'Lê Hải Đăng',
            email: 'biinhoang141212@gmail.com',
            password: 'MinhTu1401@',
        })
        const data = response
        console.log(data);
    }

    return(
        <>
        <h1>Home page</h1>
        <Button type="primary" onClick={()=>fetch()}>Primary</Button>
        </>
    )
}

export default Home;