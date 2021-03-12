import companiesTypes from './companies.types';
import { addCompanyToList, removeCompanyFromList, getOneCompany } from './companies.utils';

const INIT_STATE = {
  companyList: [],
  currentPageCompany: null,
}

const companiesReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case companiesTypes.ADD_COMPANY:
      return {
        ...state,
        companyList: addCompanyToList(state.companyList, action.payload),
      }
    case companiesTypes.DELETE_COMPANY:
      return {
        ...state,
        companyList: removeCompanyFromList(state.companyList, action.payload),
      }
    case companiesTypes.GET_COMPANY:
      return {
        ...state,
        currentPageCompany: getOneCompany(state.companyList, action.payload),
      }
    default:
      return state;
  }
}

export default companiesReducer;