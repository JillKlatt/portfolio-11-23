import { useState } from 'react';
import './inventory-item.css';
import USB from '../SVGs/USB';
import Note from '../SVGs/Note';

const Drawer = ({ icon }) => {

    const [ isShown, setIsShown ] = useState(true),
    handleInventoryItem = () => {
        setIsShown(!isShown);
    };

    const mapSVGToItem = {
        'usb': <USB />,
        'note': <Note />
    }

    return (
        <div className={`inventory-item ${isShown ? 'shown' : 'hidden'}`} onClick={handleInventoryItem}>
            {mapSVGToItem[icon]}
        </div>
    );
}

export default Drawer;
