import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Row, Col, Typography, Divider, Input, DatePicker, Select, InputNumber } from 'antd';
import moment from 'moment';
import { fetchAllTailorAction, resetTailorAction } from '@features/tailor/tailorActions';
import { fetchAllProductAction, resetProductAction } from '@features/product/productActions';

const { Option } = Select;
const { Title } = Typography;
const { TextArea } = Input;

const initValues = (f, v) => {
  return f.setFieldsValue({
    manageCloth: {
      code: v?.code ?? '',
      diagram: v?.diagram ?? '',
      diagramLength: v?.diagramLength ?? 0,
      size: v?.size ?? '',
      totalMeterCloth: v?.totalMeterCloth ?? 0,
      totalProduct: v?.totalProduct ?? 0,
      typeCloth: v?.typeCloth ?? '',
      clothesPattern: v?.clothesPattern ?? '',
      cuff: v?.cuff ?? '',
      tailorFullName: v?.tailorFullName ?? '',
      receivingDate: v?.receivingDate !== 0 ? moment(v?.receivingDate) : 0,
      deliveryDate: moment(v?.deliveryDate),
      color: v?.color ?? '',
      state: v?.state ?? 'received',
      shipper: v?.shipper ?? '',
      notes: v?.notes ?? '',
    },
  });
};

const ModalCloth = props => {
  const [formCloth] = Form.useForm();
  const dispatch = useDispatch();
  const svTailor = useSelector(state => state?.tailor?.fetchAll);
  const svProduct = useSelector(state => state?.product?.fetchAll);
  const [dataTailor, setDataTailor] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [tailorId, setTailorId] = useState('');
  const [productId, setProductId] = useState('');

  useEffect(() => {
    dispatch(fetchAllTailorAction());
    dispatch(fetchAllProductAction());
  }, [dispatch]);

  useEffect(() => {
    if (svTailor?.success && svProduct?.success) {
      setDataTailor(svTailor.data);
      setDataProduct(svProduct.data);
    }
  }, [svTailor, svProduct]);

  useLayoutEffect(() => {
    if (props.clothUpdate?.id) {
      console.log(props.clothUpdate);
      initValues(formCloth, props.clothUpdate);
    }
    return () => {
      formCloth.resetFields();
    };
  }, [props.clothUpdate]);

  const handleFinish = values => {
    let checkUpdate = { update: false };
    if (props.clothUpdate?.id) {
      checkUpdate = { update: true, idCloth: props.clothUpdate?.id || '' };
    }
    const deliveryDate = values.manageCloth.deliveryDate.unix() * 1000;
    const receivingDate = typeof values.manageCloth.receivingDate === 'undefined' || values.manageCloth.receivingDate === 0 ? 0 : values.manageCloth.receivingDate.unix() * 1000;
    props.handleOk({ ...values.manageCloth, tailorId: tailorId || props.clothUpdate?.tailorId, productId: productId || props.clothUpdate?.productId, deliveryDate: deliveryDate, receivingDate: receivingDate }, checkUpdate);

    formCloth.resetFields();
  };

  const handleOnChangSelectTailor = (value, option) => {
    setTailorId(option?.key ?? '');
  };

  const handleOnChangSelectProduct = (value, option) => {
    setProductId(option?.key ?? '');
  };

  return (
    <Modal
      centered={true}
      width={'1200px'}
      visible={props.visible}
      forceRender={true}
      getContainer={document.getElementById('root-modal')}
      destroyOnClose={true}
      onCancel={props.handleCancel}
      onOk={() => formCloth.submit()}
      cancelText={'Hủy'}
      okText={'Lưu'}
    >
      <div className="modal-container">
        <div className="modal-container--header">
          <div className="modal-container--header-title">
            <Title className="override-ant-title" level={3}>
              {props.clothUpdate?.id ? 'Cập nhật' : 'Thêm mới'}
            </Title>
          </div>
          <Divider className="override-ant-divider" />
        </div>
        <div className="modal-container--body">
          <div className="modal-container--body-item">
            <Form layout="vertical" form={formCloth} onFinish={handleFinish} name="manageCloth" className="override-ant-form" colon={false}>
              <Row justify="start" gutter={[32, 24]} className="override-ant-row">
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Mã sản phẩm" name={['manageCloth', 'code']} rules={[{ required: true, message: 'Không được để trống' }]}>
                    <Select
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
                      size="large"
                      onChange={handleOnChangSelectProduct}
                    >
                      {dataProduct.length > 0 &&
                        dataProduct.map((item, index) => (
                          <Option key={item?.id} value={item?.code}>
                            {item?.code}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Sơ đồ" name={['manageCloth', 'diagram']} rules={[{ required: true, message: 'Không được để trống' }]}>
                    <Input allowClear size="large" />
                  </Form.Item>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Chiều dài sơ đồ" name={['manageCloth', 'diagramLength']} rules={[{ required: true, type: 'number', message: 'Giá trị không hợp lệ' }]}>
                    <InputNumber
                      min={0}
                      size="large"
                      style={{ width: '100%' }}
                      formatter={value => {
                        return new Number(value);
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="start" gutter={[32, 24]} className="override-ant-row">
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Tổng số mét vải" name={['manageCloth', 'totalMeterCloth']} rules={[{ required: true, type: 'number', message: 'Giá trị không hợp lệ' }]}>
                    <InputNumber
                      min={0}
                      size="large"
                      style={{ width: '100%' }}
                      formatter={value => {
                        return new Number(value);
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Tổng số áo" name={['manageCloth', 'totalProduct']} rules={[{ required: true, type: 'number', message: 'Giá trị không hợp lệ' }]}>
                    <InputNumber
                      min={0}
                      size="large"
                      style={{ width: '100%' }}
                      formatter={value => {
                        return new Number(value);
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Loại vải" name={['manageCloth', 'typeCloth']} rules={[{ required: true, message: 'Không được để trống' }]}>
                    <Input allowClear size="large" />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="start" gutter={[32, 24]} className="override-ant-row">
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Size" name={['manageCloth', 'size']} rules={[{ required: true, message: 'Không được để trống' }]}>
                    <Input allowClear size="large" />
                  </Form.Item>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Kiểu áo" name={['manageCloth', 'clothesPattern']} rules={[{ required: true, message: 'Không được để trống' }]}>
                    <Input allowClear size="large" />
                  </Form.Item>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Tay áo" name={['manageCloth', 'cuff']} rules={[{ required: true, message: 'Không được để trống' }]}>
                    <Input allowClear size="large" />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="start" gutter={[32, 24]} className="override-ant-row">
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Thợ may" name={['manageCloth', 'tailorFullName']} rules={[{ required: true, message: 'Không được để trống' }]}>
                    <Select
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
                      size="large"
                      onChange={handleOnChangSelectTailor}
                    >
                      {dataTailor.length > 0 &&
                        dataTailor.map((item, index) => (
                          <Option key={item?.id} value={item?.fullName}>
                            {item?.fullName}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Ngày nhận" name={['manageCloth', 'receivingDate']}>
                    <DatePicker
                      disabledDate={current => {
                        return current < moment().local('vi');
                      }}
                      format={'DD/MM/YYYY'}
                      className="override-ant-input-date-picker"
                      size={'large'}
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Ngày giao" name={['manageCloth', 'deliveryDate']} initialValue={moment().local('vi')}>
                    <DatePicker
                      disabledDate={current => {
                        return current < moment().local('vi');
                      }}
                      format={'DD/MM/YYYY'}
                      className="override-ant-input-date-picker"
                      size={'large'}
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="start" gutter={[32, 24]} className="override-ant-row">
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Người giao" name={['manageCloth', 'shipper']} rules={[{ required: true, message: 'Không được để trống' }]}>
                    <Input allowClear size="large" />
                  </Form.Item>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item label="Màu sản phẩm" name={['manageCloth', 'color']} rules={[{ required: true, message: 'Không được để trống' }]}>
                    <Input allowClear size="large" />
                  </Form.Item>
                </Col>
                {props.clothUpdate?.id && (
                  <Col className="override-ant-col" xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Form.Item label="Trạng thái đơn hàng" name={['manageCloth', 'state']} rules={[{ required: true, message: 'Không được để trống' }]}>
                      <Select size="large" allowClear>
                        <Option key={'received'} value="received">
                          Đã nhận đơn
                        </Option>
                        <Option key={'delivered'} value="delivered">
                          Đã giao hàng
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                )}
              </Row>
              <Row justify="start" gutter={[32, 24]} className="override-ant-row">
                <Col className="override-ant-col" span={24}>
                  <Form.Item label="Ghi chú" name={['manageCloth', 'notes']} initialValue={''}>
                    <TextArea showCount maxLength={250} style={{ height: 160 }} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCloth;
