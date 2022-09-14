import request from '@api/configureAPI';

const fetchAllProductsAPI = () => request.get('/products');

const fetchBySlugProductsAPI = ({ slug }) => request.get(`/products/${slug}`);

const deleteByIdProductsAPI = ({ id }) => request.delete(`/admin/products/${id}`);

const createProductsAPI = ({ dataRequest }) => request.post('/admin/products', dataRequest);

const updateByIdProductsAPI = ({ id, dataRequest }) => request.put(`/admin/products/${id}`, dataRequest);

export default {
    fetchAllProductsAPI,
    fetchBySlugProductsAPI,
    deleteByIdProductsAPI,
    createProductsAPI,
    updateByIdProductsAPI,
};
