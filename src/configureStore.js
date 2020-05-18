import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {verifyAuth} from './store/actions/';
import rootReducer from './store/reducers/';

// This gets called everytime a user refreshes the app page
const configureStore = (persistedState) =>{
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(thunk)
    );
    store.dispatch(verifyAuth);
    return store;
}

export default configureStore;