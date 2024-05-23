import {FC, useEffect, useState} from 'react';
import {products} from '../../mock';
import ProductCard from '../ProductCard/ProductCard.tsx';
import './styles.scss'
import { Spinner } from 'react-bootstrap';
import Center from '../../layout/Center.tsx';



const ProductList: FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading)
        return <Center><Spinner animation="border" variant="primary" /></Center>

    return (
        <div className='product-list'>
            {
                products.map((product) => (<ProductCard key={product.id} product={product}/>))
            }
        </div>
    );
};

export default ProductList;