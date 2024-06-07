import './inventory.css';
import Button from '../Button/Button';

const Inventory = ({ isShown, setIsShown }) => {

    const hideInventory = () => {
        setIsShown(false);
    }

    return (
        <div className={`drawer-content ${isShown ? 'shown' : 'hidden'}`}>
            <h2>
                Inventory!
            </h2>
            <Button classes='computer-screen__btn' text='Return to desk' callback={hideInventory} />
        </div>
    );
}

export default Inventory;
