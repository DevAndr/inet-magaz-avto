import {FC} from 'react';
import {Button, Card} from 'react-bootstrap';
import {Product} from '../../types';
import './styles.scss';

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    return (
        <Card className='product-card'>
            <Card.Img className='img' variant="top" src={product.image}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>

            </Card.Body>
            <Card.Footer className='footer'>
                <div className="price">
                    {product.price}₽
                </div>
                <Button variant="primary">Добавить</Button>
            </Card.Footer>
        </Card>
    );
};

export default ProductCard;