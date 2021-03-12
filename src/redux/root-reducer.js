import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import companiesReducer from './companies/companies.reducer';
import officesReducer from './offices/offices.reducer';

const persistConfig = {
  key: 'internal_information',
  storage,
  whitelist: ['companies', 'offices'],
};

const rootReducer = combineReducers({
  companies: companiesReducer,
  offices: officesReducer,
});

export default persistReducer(persistConfig, rootReducer);