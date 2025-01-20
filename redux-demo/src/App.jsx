import './App.css'
import {Provider} from 'react-redux';
import store from './redux/Store';

import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
// import IceCreamContainer from './components/IceCreamContainer';


function App() {
  return (
    <>
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer/>
        <CakeContainer/>
        <HooksCakeContainer/>
        {/* <IceCreamContainer/> */}
        <HooksIceCreamContainer/>
        <NewCakeContainer/>
      </div>
      </Provider>
    </>
  )
}

export default App
