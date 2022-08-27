import {includes} from 'lodash';
class CategoriesModels {
    constructor(data = {}) {
        this.id = data.id ||null;
        this.name = data.name ||null;
        this.thumbnailUrl = data.thumbnailUrl ||null;
        this.slug = data.slug ||null;
        this.published= data.published ||0;
        this.idAuthor = data.idAuthor ||null;
        this.byAuthor = data.byAuthor ||null;
        this.idParent = data.idParent ||null;
        this.type = data.type ||null;
        this.createdAt = data.createdAt ||null;
        this.updatedAt = data.updatedAt ||null;
        this.deletedAt = data.deletedAt ||null;
    }

    handleDataApiCategories(data,hiddenButton){
        if(data?.length >0){
            let categoriesParent = data.filter(item => item?.id && item?.idParent === null);
            let categoriesChildren = data.filter(item => item?.id && typeof item?.idParent === "number");
            console.log('categoriesParent', categoriesParent);
            console.log('categoriesChildren', categoriesChildren);

            const filterChildren = (objectItem) => {
                
            }

            const cat=  categoriesParent.map(item => ({
                key: item?.id,
                name: item?.name,
                slug: item?.slug,
                icon: item?.thumbnailUrl,
                author : item?.byAuthor?.id && includes(item?.byAuthor?.roles, 'admin') ? item?.byAuthor?.fullName : '-',
                published: {
                    value: item?.published,
                    idItem: item?.id,
                },
                type: item?.type?.name,
                [item?.id !== 1 ? 'children':'child']:categoriesChildren.filter(items =>  items?.idParent === item?.id ).map(item => ({
                    key: item?.id,
                    name: item?.name,
                    slug: item?.slug,
                    icon: item?.thumbnailUrl,
                    author : item?.byAuthor?.id && includes(item?.byAuthor?.roles, 'admin') ? item?.byAuthor?.fullName : '-',
                    published: {
                        value: item?.published,
                        idItem: item?.id,
                    },
                    type: item?.type?.name,
                    options: {
                        ...item,
                        hiddenButton:hiddenButton
                    },
                })),
                options: {
                    ...item,
                    hiddenButton:hiddenButton
                },
            }
            ));
            // cat.map(item => delete item.child);
            console.log('cat', cat);
            return cat
        }
    }
}

export default CategoriesModels;