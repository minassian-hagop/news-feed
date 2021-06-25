import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './modules';

export default function configureStore(initialState = {}) {
    const rootReducer = combineReducers(reducers);

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
            )
        ),
    );
}
