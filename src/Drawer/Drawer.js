import { useState } from 'react';
import './drawer.css';
import DrawerContent from '../DrawerContent/DrawerContent';
import Button from '../Button/Button';

const Drawer = ({ content }) => {

    const [ isShown, setIsShown ] = useState(false),
    handleDrawerOpen = () => {
        setIsShown(true);
    };

    return (
        <div className='drawer'>
            <Button classes='drawer__btn' callback={handleDrawerOpen} />
            <DrawerContent isShown={isShown} setIsShown={setIsShown} content={content} />
        </div>
    );
}

export default Drawer;
