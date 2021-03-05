import './App.css';
import { createStore } from 'redux';
import allReducers from './state/store';
import { Provider } from 'react-redux';
import Counter from './components/Counter';


let store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
