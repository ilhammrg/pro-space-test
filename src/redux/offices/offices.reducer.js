import officesTypes from './offices.types';
import { addOfficeToList, removeOfficeFromList, getCompanyOffices } from './offices.utils';

const INIT_STATE = {
  allOfficesList: [],
  currentPageOfficesList: [],
}

const officesReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case officesTypes.ADD_OFFICES:
      return {
        ...state,
        allOfficesList: addOfficeToList(state.allOfficesList, action.payload),
      }
    case officesTypes.DELETE_OFFICES:
      return {
        ...state,
        allOfficesList: removeOfficeFromList(state.allOfficesList, action.payload),
      }
    case officesTypes.GET_CURRENT_COMPANY_OFFICES:
      return {
        ...state,
        currentPageOfficesList: getCompanyOffices(state.allOfficesList, action.payload),
      }
    default:
      return state;
  }
}

export default officesReducer;