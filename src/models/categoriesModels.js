import {includes} from 'lodash';
class CategoriesModels {
    constructor(data = {}) {
        this.id = data.id ||'';
        this.name = data.name ||'';
        this.thumbnailUrl = data.thumbnailUrl ||'';
        this.active = data.active ||0;
        this.slug = data.slug ||'';
        this.published= data.published ||0;
        this.idAuthor = data.idAuthor ||null;
        this.byAuthor = data.byAuthor ||null;
        this.idParent = data.idParent ||null;
        this.typeCategory = data.typeCategory ||null;
        this.createdAt = data.createdAt ||'';
        this.updatedAt = data.updatedAt ||'';
        this.deletedAt = data.deletedAt ||null;
    }

    handleDataApiCategories(data,hiddenButton){
        if(data?.length >0){
            return data.filter(item => item.id).map((item, index) => {
                return{
                    key: item?.id,
                    name: item?.name,
                    slug: item?.slug,
                    icon: item?.thumbnailUrl,
                    author : item?.byAuthor?.id && includes(item?.byAuthor?.roles, 'admin') ? item?.byAuthor?.fullName : '-',
                    active: item?.active,
                    published: item?.published,
                    type: item?.typeCategory,
                    children: item?.idParent,
                    options: {
                        item,
                        hiddenButton:hiddenButton
                    },
                }
            });
        }
    }
}

export default CategoriesModels;