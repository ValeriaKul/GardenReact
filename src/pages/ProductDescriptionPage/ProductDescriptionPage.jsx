import React from "react";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDescriptionPage() {
  const {id} = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((elem) => elem.id === +id);
  return <ProductDescription {...product} />;
}
