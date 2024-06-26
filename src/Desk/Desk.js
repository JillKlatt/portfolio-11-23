import './desk.css';
import { useState } from 'react';
import ComputerScreen from '../ComputerScreen/ComputerScreen';
import Button from '../Button/Button';
import Inventory from '../Inventory/Inventory';
import Cabinet from '../Cabinet/Cabinet';

const Desk = () => {

    const [ showComputer, setShowComputer ] = useState(false),
        [ showInventory, setShowInventory ] = useState(false);

    const handleInventoryOpen = () => {
        setShowInventory(true);
    }

    const handleComputerOpen = () => {
        setShowComputer(true);
    }

    return (
        <div className="desk">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 371.481 371.481" space="preserve">
                <g>
                    <path d="M371.481,148.038H366.4V89.947h-38.5v58.091h-88.25v-16.091h80.926V19.953H126.724v111.994h80.927v16.091H119.4V89.947   H80.9v58.091H0v30.999h13.499v172.491h96.996v-31.081h225.488v31.081h21.999V179.037h13.499V148.038z M334.9,96.947h24.5v51.091   h-24.5V96.947z M133.724,26.953h179.853v97.994H133.724V26.953z M214.65,131.947h18v16.091h-18V131.947z M87.9,96.947h24.5v51.091   H87.9V96.947z M20.499,222.16h82.996v36.122H20.499V222.16z M20.499,265.282h82.996v36.123H20.499V265.282z M110.495,179.037   h225.488v13.91H110.495V179.037z M103.495,215.16H20.499v-36.123h82.996V215.16z M20.499,344.528v-36.123h82.996v36.123H20.499z    M110.495,313.447v-113.5h225.488v113.5H110.495z M350.982,344.528h-7.999V179.037h7.999V344.528z M364.481,172.037H7v-16.999   h357.481V172.037z" />
                    <rect x="54.594" y="183.447" width="14.807" height="7" />
                    <rect x="54.594" y="226.57" width="14.807" height="7" />
                    <rect x="54.594" y="269.693" width="14.807" height="7" />
                    <rect x="54.594" y="312.816" width="14.807" height="7" />
                </g>
            </svg>
            <div className='desk__inventory'>
                <Button text='Open Inventory' classes='desktop__inventory--btn' callback={handleInventoryOpen} />
                <Inventory isShown={showInventory} setIsShown={setShowInventory} />
            </div>
            <div className='desk__computer'>
                <Button text='Open Desktop' classes='desktop__computer--btn' callback={handleComputerOpen} />
                <ComputerScreen isShown={showComputer} setIsShown={setShowComputer} />
            </div>
            <div className='desk__cabinet'>
                <Cabinet />
            </div>
            <div className='office__skip-btn'>
                <Button text='Skip the game, show me the resume' />
            </div>
        </div>
    );
}

export default Desk;
