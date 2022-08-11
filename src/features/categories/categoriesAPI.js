import request from '@api/configureAPI';

const fetchParameterCategoriesAPI = ({parameter}) => request.get(`/admin/categories/${parameter??'all'}`)

const fetchByIdCategoriesAPI = ({id}) => request.get(`/admin/categories/${id}`)




export default {
    fetchParameterCategoriesAPI,
    fetchByIdCategoriesAPI
};