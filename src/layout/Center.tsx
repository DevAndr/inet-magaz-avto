import React, {FC} from 'react';
import './styles.scss';

interface CenterProps {
children: React.ReactNode;
}

const Center: FC<CenterProps> = ({children}) => {
    return (
        <div className="center">
            {children}
        </div>
    );
};

export default Center;