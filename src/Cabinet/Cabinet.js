import Drawer from '../Drawer/Drawer';
import cabinetData from '../Drawer/drawers.json';

const Cabinet = () => {

    const drawers = cabinetData.map(drawer => <Drawer {...drawer} />)

    return (
        <div className="cabinet">
            {drawers}
        </div>
    );
}

export default Cabinet;
