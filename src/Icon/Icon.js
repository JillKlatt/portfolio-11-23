import Folder from '../SVGs/Folder';
import VSCode from '../SVGs/VSCode';
import './icon.css';

const Icon = ({ label, icon, content }) => {

    const handleFolderOpen = () => {
        console.log('folder opened!', content)
    },
    mapSVGToIcon = {
        folder: <Folder classes='computer-screen__svg' />,
        vscode: <VSCode classes='computer-screen__svg' />
    }

    return (
        <div className="icon" onClick={handleFolderOpen}>
            {mapSVGToIcon[icon]}
            <p className='icon__label'>{label}</p>
        </div>
    );
}

export default Icon;
