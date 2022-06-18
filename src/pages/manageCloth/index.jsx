import React, { useState, useEffect, useLayoutEffect, useTransition } from 'react';
import { Link, useParams } from 'react-router-dom';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Row, Col, Typography, Divider, Table, message, Tooltip, DatePicker, Tag, Space, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { hasKeyword, getLocalStorage, numberCompare, stringCompare, removeAccents } from '@utils/helpers';
import { EditOutlined, ZoomInOutlined, DeleteOutlined } from '@ant-design/icons';
import { fetchAllClothAction, postClothAction, fetchByIdClothAction, deleteClothAction, updateClothAction } from '@features/cloth/clothActions';
import ModalCloth from './modalCloth';
import ModalViewDetail from './modalViewDetail';
import UserModels from '@models/userModels';
import moment from 'moment';

const { Title, Text } = Typography;
const { Search } = Input;

const getColumnConfig = (filterValue, viewDetail, deleteCloth, updateCloth, roles) => [
  {
    title: (
      <Text ellipsis strong>
        Mã sản phẩm
      </Text>
    ),
    dataIndex: 'code',
    filterMultiple: false,
    width: 120,
    filteredValue: [filterValue],
    onFilter: (value, record) => {
      const list = [record?.code, record?.diagram, record?.typeCloth, record?.clothesPattern, record?.tailorFullName?.name, record?.size, record?.state, record?.deliveryDate, record?.shipper, record?.color, record?.cuff];
      return hasKeyword(list, value);
    },
    sorter: (a, b) => stringCompare(a.code, b.code),
    render: code => {
      return (
        <div className="table-item">
          <Text ellipsis>
            <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={code} sanitize={removeAccents} />
          </Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Sơ đồ
      </Text>
    ),
    width: 160,
    dataIndex: 'diagram',
    filterMultiple: false,
    sorter: (a, b) => stringCompare(a.diagram, b.diagram),
    render: diagram => {
      return (
        <div className="table-item">
          <Text ellipsis>
            <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={diagram} sanitize={removeAccents} />
          </Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Chiều dài sơ đồ
      </Text>
    ),
    width: 160,
    dataIndex: 'diagramLength',
    sorter: (a, b) => numberCompare(a.diagramLength, b.diagramLength),
    render: diagramLength => {
      return (
        <div className="table-item">
          <Text ellipsis>{diagramLength}</Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Size
      </Text>
    ),
    width: 160,
    dataIndex: 'size',
    filterMultiple: false,
    sorter: (a, b) => stringCompare(a.size, b.size),
    render: size => {
      return (
        <div className="table-item">
          <Text ellipsis>
            <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={size} sanitize={removeAccents} />
          </Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Tổng số mét vải
      </Text>
    ),
    width: 160,
    dataIndex: 'totalMeterCloth',
    sorter: (a, b) => numberCompare(a.totalMeterCloth.number, b.totalMeterCloth.number),
    render: totalMeterCloth => {
      return (
        <div className="table-item">
          <Text ellipsis>{totalMeterCloth.number}</Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Tổng số áo
      </Text>
    ),
    width: 160,
    dataIndex: 'totalProduct',
    sorter: (a, b) => numberCompare(a.totalProduct.number, b.totalProduct.number),
    render: totalProduct => {
      return (
        <div className="table-item">
          <Text ellipsis>{totalProduct.number}</Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Loại vải
      </Text>
    ),
    width: 160,
    dataIndex: 'typeCloth',
    filterMultiple: false,
    sorter: (a, b) => stringCompare(a.typeCloth, b.typeCloth),
    render: typeCloth => {
      return (
        <div className="table-item">
          <Text ellipsis>
            <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={typeCloth} sanitize={removeAccents} />
          </Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Kiểu áo
      </Text>
    ),
    width: 160,
    dataIndex: 'clothesPattern',
    filterMultiple: false,
    sorter: (a, b) => stringCompare(a.clothesPattern, b.clothesPattern),
    render: clothesPattern => {
      return (
        <div className="table-item">
          <Text ellipsis>
            <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={clothesPattern} sanitize={removeAccents} />
          </Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Tay áo
      </Text>
    ),
    width: 160,
    dataIndex: 'cuff',
    filterMultiple: false,
    sorter: (a, b) => stringCompare(a.cuff, b.cuff),
    render: cuff => {
      return (
        <div className="table-item">
          <Text ellipsis>
          <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={cuff} /></Text>
        </div>
      );
    },
  },
  ,
  {
    title: (
      <Text ellipsis strong>
        Màu sắc
      </Text>
    ),
    width: 160,
    dataIndex: 'color',
    filterMultiple: false,
    sorter: (a, b) => stringCompare(a.color, b.color),
    render: color => {
      return (
        <div className="table-item">
          <Text ellipsis><Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={color} /></Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Thợ may
      </Text>
    ),
    width: 160,
    dataIndex: 'tailorFullName',
    filterMultiple: false,
    sorter: (a, b) => stringCompare(a.tailorFullName.name, b.tailorFullName.name),
    render: tailorFullName => {
      return (
        <div className="table-item">
          <Text ellipsis>
            <Tag color="gold">
              <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={tailorFullName.name} />
            </Tag>
          </Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Ngày nhận
      </Text>
    ),
    width: 160,
    dataIndex: 'receivingDate',
    filterMultiple: false,
    render: receivingDate => {
      return (
        <div className="table-item">
          <Text ellipsis>{receivingDate}</Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Ngày giao
      </Text>
    ),
    width: 160,
    dataIndex: 'deliveryDate',
    filterMultiple: false,
    render: deliveryDate => {
      return (
        <div className="table-item">
          <Text ellipsis>
            <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={deliveryDate} sanitize={removeAccents} />
          </Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Người giao
      </Text>
    ),
    width: 160,
    dataIndex: 'shipper',
    filterMultiple: false,
    render: shipper => {
      return (
        <div className="table-item">
          <Text ellipsis>
            <Tag color="magenta">
              <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={shipper} />
            </Tag>
          </Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Trạng thái
      </Text>
    ),
    width: 160,
    dataIndex: 'state',
    filterMultiple: false,
    sorter: (a, b) => stringCompare(a.state, b.state),
    render: state => {
      return (
        <div className="table-item">
          <Text ellipsis>
            <Tag color={state === 'Đã giao hàng' ? 'green' : 'purple'}>
              <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={state} />
            </Tag>
          </Text>
        </div>
      );
    },
  },
  {
    title: (
      <Text ellipsis strong>
        Tùy chọn
      </Text>
    ),
    width: 160,
    dataIndex: 'options',
    filterMultiple: false,
    render: options => {
      return (
        <div className="table-item">
          <div className="row-actions">
            <Tooltip placement="top" title={'Chi tiết'} zIndex={500}>
              <Button onClick={() => viewDetail(options)} className="override-ant-button-actions" icon={<ZoomInOutlined />} />
            </Tooltip>
            {new UserModels(roles).isAdmin() && (
              <React.Fragment>
                <Tooltip placement="top" title={'Chỉnh sửa'} zIndex={500}>
                  <Button onClick={() => updateCloth(options)} className="override-ant-button-actions" icon={<EditOutlined />} />
                </Tooltip>
                <Tooltip placement="top" title={'Xóa'} zIndex={500}>
                  <Popconfirm title="Xác nhận xóa sản phẩm?" cancelText="Hủy" okText="Xóa" onConfirm={() => deleteCloth(options)}>
                    <Button className="override-ant-button-actions" icon={<DeleteOutlined />} />
                  </Popconfirm>
                </Tooltip>
              </React.Fragment>
            )}
          </div>
        </div>
      );
    },
  },
];
const ManageCloth = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const svUser = useSelector(state => state?.user?.info);
  const svCloth = useSelector(state => state?.cloth?.fetchAll);
  const svClothById = useSelector(state => state?.cloth?.fetchById);

  const [keyword, setKeyword] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalViewDetail, setVisibleModalViewDetail] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [colConfigs, setColConfigs] = useState([]);
  const [cloths, setCloths] = useState([]);
  const [totalCloths, setTotalCloths] = useState(0);
  const [clothDetail, setClothDetail] = useState({});
  const [clothSelect, setClothSelect] = useState({});
  const [isLogged, setIsLogged] = useState({});
  const [columConfigsDefault, setColumConfigsDefault] = useState([]);

  useEffect(() => {
    if (svUser.id) {
      dispatch(fetchAllClothAction());
    }
  }, [dispatch]);

  useEffect(() => {
    if (svUser.id) {
      setIsLogged(svUser);
    }
  }, [svUser]);

  useEffect(() => {
    if (svCloth?.success) {
      const results = svCloth.data
        .filter(item => !!item.code)
        .map((item, index) => ({
          key: item.id,
          code: item.code,
          diagram: item.diagram,
          diagramLength: item.diagramLength,
          size: item.size,
          totalMeterCloth: {
            number: item.totalMeterCloth,
          },
          totalProduct: {
            number: item.totalProduct,
          },
          typeCloth: item.typeCloth,
          clothesPattern: item.clothesPattern,
          cuff: item.cuff === '' ? '-' : item.cuff ?? '-',
          color: item.color === '' ? '-' : item.color ?? '-',
          tailorFullName: {
            id: item.tailorId,
            name: item.tailorFullName,
          },
          receivingDate: item.receivingDate === 0 ? '-' : moment(item.receivingDate).local('vi').format('DD/MM/YYYY'),
          deliveryDate: moment(item.deliveryDate).local('vi').format('DD/MM/YYYY'),
          shipper: item.shipper,
          state: item.state === 'delivered' ? 'Đã giao hàng' : 'Đã nhận hàng',
          options: {
            ...item,
          },
        }));
      setCloths(results.length > 1 ? results.reverse() : results);
      setTotalCloths(svCloth.data.length);
    }
    if (svCloth.failed) {
      setCloths([]);
    }
    setColConfigs(getColumnConfig(keyword, viewDetail, deleteCloth, updateCloth, isLogged));
    setColumConfigsDefault(getColumnConfig(keyword, viewDetail, deleteCloth, updateCloth, isLogged))
  }, [svCloth]);

  useEffect(() => {
    if (svClothById.success) {
      setClothDetail(svClothById.data);
    }
    if (svClothById.failed) {
      setClothDetail({});
    }
  }, [svClothById]);

  useEffect(() => {
    if (getLocalStorage('user')) {
      const userId = JSON.parse(getLocalStorage('user')).id;
      if (userId !== id) {
        message.error('Bạn không có quyền truy cập vào trang này!', 3);
        dispatch(push('/not-authorized'));
      }
    } else {
      message.warning('Bạn cần đăng nhập trước!', 3);
      dispatch(push('/login'));
    }
  }, []);

  useLayoutEffect(() => {
    if (keyword !== keyword) {
      setKeyword(keyword);
    }
  }, [keyword]);

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys({ selectedRowKeys });
  };

  function viewDetail(cloth) {
    // if (cloth?.id !== clothDetail?.id) {
    //   dispatch(
    //     fetchByIdClothAction({
    //       data: cloth?.id,
    //     })
    //   );
    // }
    dispatch(
      fetchByIdClothAction({
        data: cloth?.id,
      })
    );
    setVisibleModalViewDetail(true);
  }

  function deleteCloth(cloth) {
    dispatch(deleteClothAction({ data: cloth?.id }));
  }

  function updateCloth(cloth) {
    setClothSelect(cloth);
    setVisibleModal(true);
  }

  function handleChangeInputSearch(value) {
    if (value === null) {
      return setColConfigs(columConfigsDefault);
    }
    startTransition(() => {
      setKeyword(value.target.value);
    });
    setColConfigs(getColumnConfig(value.target.value, viewDetail, deleteCloth, updateCloth, isLogged));
  }

  function handleChangeInputDate(value) {
    if (value === null) {
      return setColConfigs(columConfigsDefault);
    }
    const formatDate = moment(value).format('DD/MM/YYYY');
    setKeyword(formatDate);
    setColConfigs(getColumnConfig(formatDate, viewDetail, deleteCloth, updateCloth, isLogged));
  }
  const handleClickModal = e => {
    setVisibleModal(!visibleModal);
    setClothSelect({});
  };

  const handleSearch = (kw, event) => {
    setKeyword(kw);
    setColConfigs(getColumnConfig(kw, viewDetail, deleteCloth, updateCloth, isLogged));
  };

  const handleSumbitModal = (formValues, eventCheckUpdateFrom) => {
    eventCheckUpdateFrom.update ? dispatch(updateClothAction({ id: eventCheckUpdateFrom?.idCloth, data: formValues })) : dispatch(postClothAction({ data: formValues }));
    setVisibleModal(!visibleModal);
    setClothSelect({});
  };

  function handleCancelModal() {
    setVisibleModalViewDetail(false);
    setClothDetail({});
  }

  return (
    <section className="section-container-full">
      <ModalCloth clothUpdate={clothSelect} visible={visibleModal} handleCancel={handleClickModal} handleOk={handleSumbitModal} />
      <ModalViewDetail visible={visibleModalViewDetail} handleCancel={handleCancelModal} clothDetail={clothDetail} handleClose={handleCancelModal} />
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="container-1200">
            <div className="manage-tailor-container">
              <Row className="override-ant-row">
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="manage-tailor-container--header">
                    <div className="manage-tailor-container--header-title">
                      <Title className="override-ant-title" level={3}>
                        Quản lý sổ cắt may
                      </Title>
                    </div>
                    <Divider className="override-ant-divider" />
                  </div>
                </Col>
                <Col className="override-ant-col" xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="manage-tailor-container--body">
                    <Row gutter={[16, 32]} className="override-ant-row" justify="space-between">
                      <Col className="override-ant-col" xs={24} sm={24} md={24} lg={7} xl={7}>
                        <div className="manage-tailor-container--body-item">
                        {new UserModels(isLogged).isAdmin() && (
                          <Button onClick={handleClickModal} size="large" className="override-ant-button" type="primary" icon={<EditOutlined />}>
                            Nhập liệu
                          </Button>
                        )}
                        </div>
                      </Col>
                      <Col className="override-ant-col" xs={24} sm={24} md={24} lg={5} xl={6}>
                        <div className="manage-tailor-container--body-item">
                          <Search className="override-ant-input-search" bordered={false} size="large" placeholder="Tìm kiếm" onSearch={handleSearch} onChange={handleChangeInputSearch} />
                        </div>
                      </Col>
                    </Row>
                    <Row justify="end" gutter={[16, 16]} className="override-ant-row">
                      <Col className="override-ant-col" xs={24} sm={24} md={24} lg={5} xl={6}>
                        <div className="manage-tailor-container--body-item" style={{ marginTop: '25px' }}>
                          <DatePicker placeholder="Ngày giao hàng" bordered={false} format={'DD/MM/YYYY'} className="override-ant-input-date-picker" size={'large'} onChange={handleChangeInputDate} />
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={[16, 32]} className="override-ant-row">
                      <Col className="override-ant-col" xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="manage-tailor-container--body-item">
                          <div className="manage-tailor-container--body-item-table">
                            <Table
                              rowSelection={{}}
                              columns={colConfigs}
                              dataSource={cloths}
                              loading={svCloth.pending || isPending}
                              className="override-ant-table-wrapper"
                              pagination={{
                                defaultPageSize: 10,
                                showLessItems: true,
                                showSizeChanger: true,
                                showTotal: (total, range) => `${range[0]}-${range[1]} tổng ${total} mục`,
                                pageSizeOptions: [10, 20, 50, 100],
                                className: 'override-ant-pagination',
                              }}
                              scroll={{ x: 900, y: 240 }}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ManageCloth;
