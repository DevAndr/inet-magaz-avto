import  {FC} from 'react';
import {Carousel, Image} from 'react-bootstrap';
import './styles.scss';

interface SliderProps {

}

const Slider: FC<SliderProps> = ({}) => {
    return (
        <Carousel className='sliders'>
        <Carousel.Item>
            <Image src="/banners/1.webp"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="/banners/2.webp"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="/banners/3.webp"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;