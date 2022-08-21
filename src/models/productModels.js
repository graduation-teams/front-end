class ProductModels {
    constructor(data = {}) {
        this.id = data.id ||'';
        this.name = data.name ||'';
        this.thumbnail_url = data.thumbnail_url ||'';
        this.active = data.active ||0;
        this.public_site = data.public_site ||0;
        this.id_author = data.id_author ||null;
        this.id_parent = data.id_parent ||null;
        this.type_category = data.type_category ||null;
        this.created_at = data.created_at ||'';
        this.updated_at = data.updated_at ||'';
        this.deleted_at = data.deleted_at ||null;
    }

    handleDataApiProduct(data,hiddenButton){
        if(data?.length >0){
            return data.filter(item => item.id).map((item, index) => ({
                key: item?.id,
                sku: item?.sku,
                name: item?.name,
                category: item?.category,
                slug: item?.slug_seo,
                active: item?.active,
                published: item?.public_site,
                type: item?.type_category,
                children: item?.id_parent,
                unitPrice: item?.unit_price,
                options: {
                    ...item,
                    hiddenButton:hiddenButton
                },
            }));
        }
    }
}

export default ProductModels;