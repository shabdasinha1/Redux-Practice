import './App.css'
import {Provider} from 'react-redux';
import store from './redux/Store';

import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/IceCreamContainer';
// import IceCreamContainer from './components/IceCreamContainer';


function App() {
  return (
    <>
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        {/* <IceCreamContainer/> */}
        <HooksIceCreamContainer/>
      </div>
      </Provider>
    </>
  )
}

export default App
