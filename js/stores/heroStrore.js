import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../combiners';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();


export default function configureStore() {
	const store = createStore(rootReducer, applyMiddleware(thunk, logger));

  if (module.hot) {
    module.hot.accept('../combiners', () =>
      store.replaceReducer(require('../combiners')) // eslint-disable-line global-require
    );
  }

  return store;
}