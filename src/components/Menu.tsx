import { Card, Col, Row } from "react-bootstrap";
import { products } from "@/data/products";

function Menu({}) {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col xs={12} sm={6} md={6} key={product.id} className="p-3">
            <Card className="d-flex flex-row">
              <Card.Img
                src={product.img}
                style={{ flex: "0 0 20%", minWidth: "100px" }}
              />
              <Card.Body className="d-flex flex-column flex-grow-1">
                <div className="pb-4">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Subtitle>{product.subtitle}</Card.Subtitle>
                </div>
                <Card.Footer className="mt-auto">{product.price}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Menu;
