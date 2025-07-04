import { Card, Col, Row } from "react-bootstrap";
import { categories } from "@/data/categories";

function Menu({}) {
  return (
    <>
      {categories.map((category) => (
        <div key={category.id_category} className="mb-4 mt-4">
          <h3>{(category.name).toUpperCase()}</h3>
          <Row>
            {category.products.map((product) => (
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
                    <Card.Footer className="mt-auto">
                      {product.price}
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
}

export default Menu;
