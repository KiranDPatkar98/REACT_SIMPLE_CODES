import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/Cake';
import {Provider} from 'react-redux'
import store
 from './redux/store';

function App() {
  return (
   <>
   <Provider store={store}>
   <CakeContainer />
   </Provider>
   </>
  );
}

export default App;
