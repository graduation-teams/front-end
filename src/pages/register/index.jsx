import React, { useEffect, useMemo, useState } from 'react';
import { push } from '@lagunovsky/redux-react-router';
import { Helmet } from 'react-helmet';
import LayoutCustomer from '@containers/layoutCustomer';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '@utils/helpers';
import RegisterForm from './components';
import { toast } from 'react-toastify';

function RegisterPage() {
    return (
        <React.Fragment>
            <RegisterForm/>
        </React.Fragment>
    );
}

export default RegisterPage;
