import ReactDOM from 'react-dom';
import {App} from './components/App';
import { Provider } from 'react-redux';
import {store} from './redux/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/got-react-hw-08-phonebook">
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
);
