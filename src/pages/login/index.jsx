import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { push } from '@lagunovsky/redux-react-router';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '@utils/helpers';
import LoginForm from './components';
import { toast } from 'react-toastify';

function LoginPage() {
    return (
        <React.Fragment>
            <LoginForm/>
        </React.Fragment>
    );
}

export default LoginPage;
