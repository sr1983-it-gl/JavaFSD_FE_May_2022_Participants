
import {Card, Button, Row, Col} from "react-bootstrap";

import SAMPLE_PRODUCTS, {ProductModel} from "../sample-products";

type ProductsListerLocalModel = {
  addToCart : (productItem : ProductModel) => void;
  removeFromCart : (productItem : ProductModel) => void;
}

const ProductsLister = (productsListerModel : ProductsListerLocalModel) => {

  return (
    <div style={{backgroundColor: "lightblue"}}>

      <h2>Products Display Page </h2>
      <br/>

      <Row>
      {

      SAMPLE_PRODUCTS.map( (productItem) => (

        <Col key={productItem.id}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={productItem.image} />
          <Card.Body>
            <Card.Title>{productItem.name}</Card.Title>
            <Card.Text> {productItem.price}
            </Card.Text>

            <Button variant="primary" onClick={
              () => {
                productsListerModel.addToCart(productItem)
              }
            }>Add to Cart</Button>

            <Button variant="primary" onClick={
              () => {
                productsListerModel.removeFromCart(productItem)
              }
            }>Remove from Cart</Button>
          
          </Card.Body>
          </Card>

          </Col>
      ))
      }
      </Row>


    </div>
  );
}

export {ProductsLister}