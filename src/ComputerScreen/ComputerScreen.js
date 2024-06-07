import './computer-screen.css';
import Folder from '../Icon/Icon';
import iconData from '../Icon/icons.json';
import Button from '../Button/Button';

const ComputerScreen = ({ isShown, setIsShown }) => {

    const folders = iconData.map(cat => <Folder {...cat} key={cat.label} />);

    const hideComputer = () => {
        setIsShown(false);
    }

    return (
        <div className={`computer-screen ${isShown ? 'shown' : 'hidden'}`}>
            <div className='computer-screen__icons'>
                {folders}
            </div>
            <Button classes='computer-screen__btn' text='Return to desk' callback={hideComputer} />
        </div>
    );
}

export default ComputerScreen;
  