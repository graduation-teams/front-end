import request from '@api/configureAPI';

const fetchAllCategoriesAPI = () => request.get('/categories');

const fetchByIdCategoriesAPI = ({id}) => request.get(`/categories/${id}`)

const deleteByIdCategoriesAPI = ({id}) => request.delete(`/categories/${id}`)

const createCategoriesAPI = ({dataRequest}) => request.post('/categories', {dataRequest})

const updateByIdCategoriesAPI = ({id, dataRequest}) => request.path(`/categories/${id}`, {dataRequest})

export default {
    fetchAllCategoriesAPI,
    fetchByIdCategoriesAPI,
    deleteByIdCategoriesAPI,
    createCategoriesAPI,
    updateByIdCategoriesAPI
};