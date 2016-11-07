import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../combiners';
import thunk from 'redux-thunk';


export default function configureStore() {
	const store = createStore(rootReducer, applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept('../combiners', () =>
      store.replaceReducer(require('../combiners')) // eslint-disable-line global-require
    );
  }

  return store;
}