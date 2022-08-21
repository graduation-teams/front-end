import request from '@api/configureAPI';

const fetchAllCategoriesAPI = () => request.get('/categories');

const fetchByIdCategoriesAPI = ({id}) => request.get(`/admin/categories/${id}`)

const deleteByIdCategoriesAPI = ({id}) => request.delete(`/admin/categories/${id}`)


export default {
    fetchAllCategoriesAPI,
    fetchByIdCategoriesAPI,
    deleteByIdCategoriesAPI
};