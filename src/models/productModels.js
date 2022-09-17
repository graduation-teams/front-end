class ProductModels {
    constructor(data = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.sku = data.sku ||'';
        this.slug = data.slug || '';
        this.unitPrice = data.unitPrice || 0;
        this.discountPrice = data.discountPrice || 0;
        this.quantity = data.quantity || 0;
        this.description = data.description || '';
        this.content = data.content || '';
        this.hot = data.hot || 0;
        this.sale = data.sale || 0;
        this.thumbnailUrl = data.thumbnailUrl || '';
        this.published = data.published || 0;
        this.createdAt = data.createdAt || '';
        this.updatedAt = data.updatedAt || '';
        this.deletedAt = data.deletedAt || null;
    }

    handleDataApiProduct(data, hiddenButton) {
        if (data?.length > 0) {
            return data
                .filter(item => item.id)
                .map((item, index) => ({
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
                        hiddenButton: hiddenButton,
                    },
                }));
        }
    }

    handleDataApiProductSale(data) {
        if (data?.length === 0) return [];
        return data
            .filter(item => item?.sale === 0)
            .map((itemProduct, index) => ({
                key: itemProduct?.id,
                name: itemProduct?.name,
                unitPrice: itemProduct?.unitPrice,
                discountPrice: itemProduct?.discountPrice,
                thumbnailUrl: itemProduct?.thumbnailUrl,
                slug: itemProduct?.slug,
            }));
    }
}

export default ProductModels;
