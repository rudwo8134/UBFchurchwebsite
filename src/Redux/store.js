import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root_saga";
import rootReducer from './root_reducer'

const SagaMiddleware = createSagaMiddleware()

const middleware = [SagaMiddleware]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middleware)))

SagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

const all = {store , persistor};

export default all