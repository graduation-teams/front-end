import React, { useEffect, useState } from 'react';
import {useQuery} from '@hooks'
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { Result, Button } from 'antd';
import { push } from '@lagunovsky/redux-react-router';
import request from '@api/configureAPI';
import { setInfoUserAction } from '@features/user/userActions';
import {setLocalStorage } from '@utils/helpers';
import { toast } from 'react-toastify';
import LayoutCustomer from '@containers/layoutCustomer';

function ActivePage() {
    const query = useQuery();
    const dispatch = useDispatch();
    const [activated, setActivated] = useState(true);

    useEffect(() => {
            console.log('query', query.get('email_verify_url'));
            try {
                if(query.get('email_verify_url') !== null){
                let queryURL = query.get('email_verify_url')+'&signature='+query.get('signature');
                    request.get(queryURL).then((response)=>{
                        dispatch(setInfoUserAction(response?.data?.user));
                        setLocalStorage('access_token', response?.data?.authorisation?.access_token);
                        setLocalStorage('token_type', response?.data?.authorisation?.token_type);
                        setLocalStorage('user', JSON.stringify(response?.data?.user));
                    })
                }else{
                    setActivated(false);
                }
            } catch (error) {
                toast.error('API verify account failed!',{limit:1});
                setActivated(false);
                if(process.env.NODE_ENV === 'development'){
                    console.error('API verify account failed!',error)
                }
            }
        
        
    }, []);

    const Elements = React.useMemo(() => {
        let arrayElements = [{ element: ()=>{
            return (<Result
                status={activated ? 'success' : 'warning'}
                title={activated ? 'Your account is activated!' : 'Your account is not activated!'}
                extra={
                    <Button onClick={()=>dispatch(push('/'))} type="primary" size='large' danger>
                        Back to home page
                    </Button>
                }
            />)
        } }];
        return arrayElements;
    }, [activated]);

    return(
        <React.Fragment>
            <Helmet>
                <title>Active Account - TechStore</title>
            </Helmet>
            <LayoutCustomer childrenComponent={Elements} />
        </React.Fragment>
    )
}

export default ActivePage