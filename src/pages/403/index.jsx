import React from 'react';
import { Result, Button } from 'antd';

const NotAuthorized = () => {
    return (
        <React.Fragment>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, You do not have permission to access this page!"
                extra={
                    <Button href={'/'} type="primary">
                        Back to home page
                    </Button>
                }
            />
        </React.Fragment>
    );
};

export default NotAuthorized;
