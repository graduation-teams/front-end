import React from 'react';
import { Result, Button } from 'antd';

const NotFound = () => {
    return (
        <React.Fragment>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you are visiting does not exist!"
                extra={
                    <Button href={'/'} type="primary">
                        Back to home page
                    </Button>
                }
            />
        </React.Fragment>
    );
};

export default NotFound;
