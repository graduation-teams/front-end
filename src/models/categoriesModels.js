import { includes } from 'lodash';
class CategoriesModels {
    constructor(data = {}) {
        this.id = data.id || null;
        this.name = data.name || null;
        this.thumbnailUrl = data.thumbnailUrl || null;
        this.slug = data.slug || null;
        this.published = data.published || 0;
        this.idAuthor = data.idAuthor || null;
        this.byAuthor = data.byAuthor || null;
        this.idParent = data.idParent || null;
        this.type = data.type || null;
        this.createdAt = data.createdAt || null;
        this.updatedAt = data.updatedAt || null;
        this.deletedAt = data.deletedAt || null;
    }

    handleDataApiCategories(data, hiddenButton) {
        if (data?.length > 0) {
            let categoryParent = data.filter(item => item?.idParent === null);
            let categoryChild = data.filter(item => item?.idParent !== null && typeof item?.idParent === 'number');

            const dataCategory = categoryParent?.map(itemCate => ({
                key: itemCate?.id,
                name: itemCate?.name,
                icon: itemCate?.thumbnailUrl,
                slug: itemCate?.slug,
                published: {
                    value: itemCate?.published,
                    idItem: itemCate?.id,
                },
                cateChild: categoryChild?.filter(item => item?.idParent === itemCate?.id),
                author: itemCate?.byAuthor?.id && includes(itemCate?.byAuthor?.roles, 'admin') ? itemCate?.byAuthor?.fullName : '-',
                type: itemCate?.type?.name,
                options: {
                    ...itemCate,
                    hiddenButton: hiddenButton,
                },
            }));

            console.log('dataCategory: ', dataCategory);

            return dataCategory;
        }
    }

    // handle call api for home page
    handleDataHomePage(data) {
        if (data?.length === 0) return [];
        return data
            .filter(item => item?.idParent === null && item?.id !== 1)
            .map((itemCate, index) => ({
                key: itemCate?.id,
                name: itemCate?.name,
                value: itemCate?.slug,
            }));
    }
}

export default CategoriesModels;

// [itemCate?.id !== 1? "children": "child"]: categoryChild?.filter(item => item?.idParent === itemCate?.id)?.map(itemChild => (
//     {
//         key: itemChild?.id,
//         name: itemChild?.name,
//         icon: itemChild?.thumbnailUrl,
//         slug: itemChild?.slug,
//         published: {
//             value: itemChild?.published,
//             idItem: itemChild?.id,
//         },
//         author: itemChild?.byAuthor?.id && includes(itemChild?.byAuthor?.roles, 'admin') ? itemChild?.byAuthor?.fullName : '-',
//         type: itemChild?.type?.name,
//         [itemChild?.idParent !== null?"children":"child"]: categoryChild?.filter(item => item?.idParent === itemChild?.id)?.map(itemChild2 => (
//             {
//                 key: itemChild2?.id,
//                 name: itemChild2?.name,
//                 icon: itemChild2?.thumbnailUrl,
//                 slug: itemChild2?.slug,
//                 published: {
//                     value: itemChild2?.published,
//                     idItem: itemChild2?.id,
//                 },
//                 type: itemChild2?.type?.name,
//                 author: itemChild2?.byAuthor?.id && includes(itemChild2?.byAuthor?.roles, 'admin') ? itemChild2?.byAuthor?.fullName : '-',
//                 options: {
//                     ...itemChild2,
//                     hiddenButton: hiddenButton,
//                 }
//             }
//         )),
//         options: {
//             ...itemChild,
//             hiddenButton: hiddenButton,
//         }
//     }
// ))
