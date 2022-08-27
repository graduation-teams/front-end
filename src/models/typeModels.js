class TypeModels {
    constructor(data = {}) {
        this.id = data.id ||'';
        this.name = data.name ||'';
        this.slug = data.slug_seo ||'';
        this.created_at = data.created_at ||'';
        this.updated_at = data.updated_at ||'';
        this.deleted_at = data.deleted_at ||null;
    }

    handleDataApiType(data){
        if(data?.length >0){
            return data.filter(item => item.id).map((item, index) => ({
                key: item?.id,
                name: item?.name,
                slug: item?.slug,
            }));
        }
    }
}

export default TypeModels;