import productsApi from "apis/products";
// import { Spinner,Typography } from "neetoui";
import ProductListItem from "./ProductListItem";
import { useState, useEffect } from "react";
import { Header, PageLoader } from "components/commons";


const ProductList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const { products } = await productsApi.fetch();
            setProducts(products);
        } catch (error) {
            console.log("An error occurred:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (isLoading) {
        return (
            <PageLoader />
        );
    }

    return (<div className="flex flex-col">
        <Header shouldShowBackButton={false} title="Smile Cart" />
        <div className="grid grid-cols-2 justify-items-center gap-y-8 p-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map(product => (
                <ProductListItem key={product.slug} {...product} />
            ))}
        </div>
    </div>
    );
}

export default ProductList;