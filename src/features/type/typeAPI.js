import request from '@api/configureAPI';

const fetchAllTypeCategoriesAPI = () => request.get('/type-categories');

const fetchByIdTypeCategoriesAPI = ({id}) => request.get(`/type-categories/${id}`)

const deleteByIdTypeCategoriesAPI = ({id}) => request.delete(`/type-categories/${id}`)

const createTypeCategoriesAPI = ({dataRequest}) => request.post('/type-categories', {dataRequest})

const updateByIdTypeCategoriesAPI = ({id, dataRequest}) => request.path(`/type-categories/${id}`, {dataRequest})

export default {
    fetchAllTypeCategoriesAPI,
    fetchByIdTypeCategoriesAPI,
    deleteByIdTypeCategoriesAPI,
    createTypeCategoriesAPI,
    updateByIdTypeCategoriesAPI
};