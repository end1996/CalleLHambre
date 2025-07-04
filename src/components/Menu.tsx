import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { categories } from "@/data/categories";
import { useState } from "react";
import { ProductCardContent } from "./ProductCardContent";
import type { Product } from "./ProductCardContent";

function Menu({}) {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = (product: Product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  return (
    <>
      {categories.map((category) => (
        <div key={category.id_category} className="mb-4 mt-4">
          <h3>{category.name.toUpperCase()}</h3>
          <Row>
            {category.products.map((product) => (
              <Col xs={12} sm={6} md={6} key={product.id} className="p-3">
                <Card className="d-flex flex-row" onClick={() => handleShow({ ...product, id: String(product.id), price: String(product.price) })}>
                  <ProductCardContent
                    product={{ ...product, id: String(product.id), price: String(product.price) }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedProduct && (
                <ProductCardContent product={selectedProduct} />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </>
  );
}

export default Menu;
