import { styled } from "@/styles";
import { useRouter } from "next/router";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
});

const Product = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Product: </h1>

      <Button>{JSON.stringify(query)}</Button>
    </div>
  );
};

export default Product;
