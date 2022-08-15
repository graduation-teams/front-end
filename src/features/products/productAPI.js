import request from '@api/configureAPI';

const fetchAllProductsAPI = () => request.get('/admin/products')

const fetchByIdProductsAPI = ({id}) => request.get(`/admin/categories/${id}`)

const deleteByIdProductsAPI = ({id}) => request.delete(`/admin/products/${id}`)

const createProductsAPI = ({dataRequest}) => request.post('/admin/products', dataRequest)

const updateByIdProductsAPI = ({id, dataRequest}) => request.put(`/admin/products/${id}`, dataRequest)


export default {
    fetchAllProductsAPI,
    fetchByIdProductsAPI,
    deleteByIdProductsAPI,
    createProductsAPI,
    updateByIdProductsAPI
};