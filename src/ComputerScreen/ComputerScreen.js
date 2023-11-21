import './computer-screen.css';
import Folder from '../Folder/Folder';
import folderData from '../Folder/folder.json';
import Button from '../Button/Button';

const ComputerScreen = ({ isShown, setIsShown }) => {

    const folders = folderData.map(cat => <Folder {...cat} key={cat.label} />);

    const hideComputer = () => {
        setIsShown(false);
    }

    return (
        <div className={`computer-screen ${isShown ? 'shown' : 'hidden'}`}>
            <div className='computer-screen__folders'>
                {folders}
            </div>
            <Button classes='computer-screen__btn' text='Return to desk' callback={hideComputer} />
        </div>
    );
}

export default ComputerScreen;
  