import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { push } from '@lagunovsky/redux-react-router';
import LayoutCustomer from '@containers/layoutCustomer';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '@utils/helpers';
import ResetPasswordForm from './components';
import { toast } from 'react-toastify';
import {useQuery} from '@hooks';

function ResetPasswordPage() {

    return (
        <React.Fragment>
            <ResetPasswordForm/>
        </React.Fragment>
    );
}

export default ResetPasswordPage;
