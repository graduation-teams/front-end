import React from 'react';
import { Typography } from 'antd';
import { UserOutlined, UsergroupAddOutlined, HeartOutlined, LogoutOutlined, SkinOutlined, DashboardOutlined } from '@ant-design/icons';
import UserModels from '@models/userModels';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '@features/auth/authActions';
const { Title } = Typography;
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent } from '@components/common';


function UserMenu({ user }){
  const dispatch = useDispatch();

  function handleLogout(e) {
    dispatch(logoutAction({refresh:true}));
  }

  function handleRouting(params) {
    console.log('params', params);
    dispatch(push(params));
  }

  return (
    <React.Fragment>
      <div className="sub-menu">
        <div className="sub-menu__user">
          <div className="sub-menu__user--box">
            <h3>Personal</h3>
            <Link to={`/user-profile/user-id/${user.id}/tab-current/info`} className="sub-menu__user--item">
              <UserOutlined style={{ marginRight: '6px' }} />
              View Profile
            </Link>
            <Link to={`/user-profile/user-id/${user.id}/tab-current/wishlist`} className="sub-menu__user--item">
              <HeartOutlined style={{ marginRight: '6px' }} />
              Whish List
            </Link>
          </div>
          {new UserModels(user).isManager() && (
            <div className="sub-menu__user--box">
              <h3>Management</h3>
              <Link to={`/admin-profile/manager-id/${user.id}/tab-current/dashboard`} className="sub-menu__user--item">
                <DashboardOutlined style={{ marginRight: '6px' }} target="_blank"/>
                Dashboard
              </Link>
              <Link to={`/admin-profile/manager-id/${user.id}/tab-current/manager-users`} className="sub-menu__user--item">
                <UsergroupAddOutlined style={{ marginRight: '6px' }} target="_blank"/>
                All Users
              </Link>
              <Link to={`/admin-profile/manager-id/${user.id}/tab-current/manager-products`} className="sub-menu__user--item">
              <SkinOutlined style={{ marginRight: '6px' }} target="_blank"/>
                All Products
              </Link>
            </div>
          )}
          <div className="sub-menu__user--box">
            <p onClick={handleLogout} className="sub-menu__user--item">
              <LogoutOutlined style={{ marginRight: '6px' }} onClick={()=>dispatch(logoutAction())}/>
              Logout
            </p>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default withErrorBoundary(UserMenu,{
    FallbackComponent:ErrorComponent
});

