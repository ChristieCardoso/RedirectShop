"use client";
import Container from "./Container";
import Product from "./Product";
import { ProductProps } from "../../type";
import Heading from "./Heading";

interface Props {
  products: ProductProps[];
  title?: string;
}

const NewArrival = ({ products, title }: Props) => {
  return (
    <Container>
      <Heading heading={title} />
      <div className="flex">
        {products?.map((item: ProductProps) => (
          <div key={item?._id} className="px-2">
            <Product product={item} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewArrival;
