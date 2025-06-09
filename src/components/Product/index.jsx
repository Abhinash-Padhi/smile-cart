import Carousel from "./Carousel";
import { isNotNil, append } from "ramda";
import axios from "axios";
import { Spinner, Typography } from "neetoui";
import { useState, useEffect } from "react";
import productsApi from "apis/products";
import { LeftArrow } from "neetoicons";
import { useParams, useHistory } from "react-router-dom";
import { Header, PageLoader } from "components/commons";
import AddToCart from "components/commons/AddToCart";

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { slug } = useParams();
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const fetchProduct = async () => {
    try {
      const response = await productsApi.show(slug);
      setProduct(response);
    } catch (error) {
      setIsError(true);
      console.log("An error occurred:", error);
    }
    finally {
      setIsLoading(false);
    }
  };

  if (isError) return <PageNotFound />;

  useEffect(() => {
    fetchProduct();
  }, []);

  const { name, description, mrp, offerPrice, imageUrls, imageUrl } = product;

  const totalDiscounts = mrp - offerPrice;
  const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);

  if (isLoading) {
    return (
      <PageLoader />
    );
  }

  return (
    <>

      <Header title={name} />

      <div className="mt-6 flex gap-4">

        <div className="w-2/5">

          <div className="flex justify-center gap-16">
            {isNotNil(imageUrls) ? (
              <Carousel imageUrls={append(imageUrl, imageUrls)} title={name} />
            ) : (
              <img alt={name} className="w-48" src={imageUrl} />
            )}
          </div>

        </div>

        <div className="w-3/5 space-y-4">

          <Typography>{description}</Typography>
          <Typography>MRP: {mrp}</Typography>
          <Typography className="font-semibold">
            Offer price: {offerPrice}
          </Typography>
          <Typography className="font-semibold text-green-600">
            {discountPercentage}% off
          </Typography>
          <AddToCart {...{ slug }} />

        </div>

      </div>

    </>
  );
}

export default Product;
