import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Row, Col, Typography, Divider, Input, DatePicker, Select, InputNumber, Tag, Image } from 'antd';
import moment from 'moment';
import { fetchAllTailorAction, resetTailorAction } from '@features/tailor/tailorActions';
import { fetchAllProductAction, resetProductAction } from '@features/product/productActions';

const { Option } = Select;
const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const ModalViewDetail = props => {
  return (
    <Modal
      centered={true}
      width={'1200px'}
      visible={props.visible}
      forceRender={true}
      getContainer={document.getElementById('root-modal')}
      destroyOnClose={true}
      onCancel={props.handleCancel}
      onOk={props.handleClose}
      cancelText={'Hủy'}
      okText={'Đóng'}
    >
      <div className="modal-container">
        <div className="modal-container--header">
          <div className="modal-container--header-title">
            <Title className="override-ant-title" level={3}>
              Chi tiết sổ cắt may
            </Title>
          </div>
          <Divider className="override-ant-divider" />
        </div>
        <div className="modal-container--body">
          <div className="modal-container--body-item">
            <Row justify="start" className="override-ant-row">
              <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                <p className="override-text">
                  Mã sản phẩm:
                  <Text ellipsis strong>
                    {props?.clothDetail?.code}
                  </Text>
                </p>
                <p className="override-text">
                  Sơ đồ:
                  <Text ellipsis strong>
                    {props?.clothDetail?.diagram}
                  </Text>
                </p>
                <p className="override-text">
                  Chiều dài sơ đồ:
                  <Text ellipsis strong>
                    {props?.clothDetail?.diagramLength}
                  </Text>
                </p>
                <p className="override-text">
                  Tổng số mét vải:
                  <Text ellipsis strong>
                    {props?.clothDetail?.totalMeterCloth}
                  </Text>
                </p>
                <p className="override-text">
                  Tổng sản phẩm:
                  <Text ellipsis strong>
                    {props?.clothDetail?.totalProduct}
                  </Text>
                </p>
              </Col>
              <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                <p className="override-text">
                  Loại vải:
                  <Text ellipsis strong>
                    {props?.clothDetail?.typeCloth}
                  </Text>
                </p>
                <p className="override-text">
                  Size:
                  <Text ellipsis strong>
                    {props?.clothDetail?.size}
                  </Text>
                </p>
                <p className="override-text">
                  Kiểu áo:
                  <Text ellipsis strong>
                    {props?.clothDetail?.clothesPattern}
                  </Text>
                </p>
                <p className="override-text">
                  Kiểu tay:
                  <Text ellipsis strong>
                    {props?.clothDetail?.cuff}
                  </Text>
                </p>
                <p className="override-text">
                  Màu sắc:
                  <Text ellipsis strong>
                    {props?.clothDetail?.color}
                  </Text>
                </p>
              </Col>
              <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                <p className="override-text">
                  Ngày nhận:
                  <Text ellipsis strong>
                    {props?.clothDetail?.receivingDate === 0 ? '' : moment(props?.clothDetail?.receivingDate).local('vi').format('DD/MM/YYYY')}
                  </Text>
                </p>
                <p className="override-text">
                  Ngày giao:
                  <Text ellipsis strong>
                    {moment(props?.clothDetail?.deliveryDate).local('vi').format('DD/MM/YYYY')}
                  </Text>
                </p>
                <p className="override-text">
                  Người giao hàng:
                  <Text ellipsis strong>
                    <Tag color="magenta">{props?.clothDetail?.shipper}</Tag>
                  </Text>
                </p>
                <p className="override-text">
                  Thợ may:
                  <Text ellipsis strong>
                    <Tag color="gold">{props?.clothDetail?.tailorFullName}</Tag>
                  </Text>
                </p>
                <p className="override-text">
                  Trạng thái:
                  <Text ellipsis strong>
                    <Tag color={props?.clothDetail?.state === 'delivered' ? 'green' : 'purple'}>{props?.clothDetail?.state === 'delivered' ? 'Đã giao hàng' : 'Đã nhận hàng'}</Tag>
                  </Text>
                </p>
              </Col>
            </Row>
            {
            props?.clothDetail?.product?.url !=="" && (
              <Row justify="start"  className="override-ant-row">
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Image width={200} src={props?.clothDetail?.product?.url}/>
                </Col>
              </Row>
            )
          }
            <Row justify="start" className="override-ant-row">
              <Col className="override-ant-col" xs={24} sm={24} md={24} lg={24} xl={24}>
                <Paragraph ellipsis strong>
                  <pre style={{ minHeight: '150px' }}>
                    <Text strong>{props?.clothDetail?.notes ?? ''}</Text>
                  </pre>
                </Paragraph>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalViewDetail;
