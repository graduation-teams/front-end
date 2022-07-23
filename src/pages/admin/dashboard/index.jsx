import React, { useEffect, useState, useMemo, lazy } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import CardStatistics from './components/cardStatistics';

function Dashboard(){
    return (
      <React.Fragment>
        <CardStatistics/> 
    </React.Fragment>
    )
}

export default Dashboard;