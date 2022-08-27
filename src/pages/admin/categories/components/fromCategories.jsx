import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { Col, Row, Table, Space, Button } from 'antd';

function FromCategories(param) { 
    return (
        <React.Fragment>
            <Row>
                
            </Row>
        </React.Fragment>
    );
}

export default withErrorBoundary(FromCategories, {
    FallbackComponent: ErrorComponent,
});