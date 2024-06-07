import './drawer-content.css';
import Button from '../Button/Button';
import InventoryItem from '../InventoryItem/InventoryItem';

const DrawerContent = ({ isShown, setIsShown, content }) => {

    const closeDrawer = () => {
        setIsShown(false);
    }

    return (
        <div className={`drawer-content ${isShown ? 'shown': 'hidden'}`}>
            <InventoryItem icon={content} />
            <Button text='Close Drawer' callback={closeDrawer} />
        </div>
    );
}

export default DrawerContent;