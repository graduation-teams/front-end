import React from 'react';
import { Result, Button } from 'antd';

const ServerDied = () => {
    return (
        <React.Fragment>
            <Result
                status="500"
                title="500"
                subTitle="Sorry, There was an error at the server, please try again later!"
                extra={
                    <Button href={'/'} type="primary">
                        Back to home page
                    </Button>
                }
            />
        </React.Fragment>
    );
};

export default ServerDied;
