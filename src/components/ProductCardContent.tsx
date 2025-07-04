import { Card } from "react-bootstrap";

export type Product = {
    id: string;
    img: string;
    title: string;
    subtitle: string;
    price: string;
};

interface ProductCardContentProps {
    product: Product;
}

export function ProductCardContent({ product }: ProductCardContentProps) {
  return (
    <div className="d-flex flex-row">
      <Card.Img
        src={product.img}
        style={{ flex: "0 0 20%", minWidth: "100px" }}
      />
      <Card.Body className="d-flex flex-column flex-grow-1">
        <div className="pb-4">
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle>{product.subtitle}</Card.Subtitle>
        </div>
        <Card.Footer className="mt-auto">
          {product.price}
        </Card.Footer>
      </Card.Body>
    </div>
  );
}