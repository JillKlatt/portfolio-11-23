import './app.css';
import Desk from './Desk/Desk';
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <Desk />
      </div>
    </Provider>
  );
}

export default App;
