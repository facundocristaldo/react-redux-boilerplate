import './App.css';
import { createStore } from 'redux';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import Counter from './components/Counter';


let store = createStore(allReducers)

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
