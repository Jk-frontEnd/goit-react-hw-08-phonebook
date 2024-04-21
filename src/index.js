import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { App } from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router> 
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
