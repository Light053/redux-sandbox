import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducer/reducer';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from './app/App';

const store = configureStore({
  reducer: counterSlice.reducer
});


const root = createRoot(document.getElementById('root'));
root.render
  (<Provider store={store}>
    <App />
  </Provider>)



