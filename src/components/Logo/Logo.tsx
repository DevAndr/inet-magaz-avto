import {FC} from 'react';
import {Image} from 'react-bootstrap';
import './styles.scss';

interface LogoProps {

}

const Logo: FC<LogoProps> = ({}) => {
    return (
        <div className="logo">
            <Image src='/logo.jpg' width={64} height={64} roundedCircle/>
            <div>Магазин автозапчастей</div>
        </div>
    );
};

export default Logo;