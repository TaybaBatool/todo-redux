import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import addtodo from './components/addtodos'
import store from "./redux/store";
import { Provider } from 'react-redux'



ReactDOM.render(<Provider store = {store}>
<App />
</Provider>,
 document.getElementById('root'));