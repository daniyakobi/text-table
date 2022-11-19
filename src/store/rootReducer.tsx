import { State, Action, ActionType } from "./types"

const initialState: State = {
  companies: [
    { id: 1, name: 'Компания 1', address: 'Адрес 1 компании', employeeCount: 1, checked: false },
    { id: 2, name: 'Компания 2', address: 'Адрес 2 компании', employeeCount: 1, checked: false },
    { id: 3, name: 'Компания 3', address: 'Адрес 3 компании', employeeCount: 1, checked: false },
    { id: 4, name: 'Компания 4', address: 'Адрес 4 компании', employeeCount: 1, checked: false }
  ],
  employeies: [
    { id: 1, name: 'Иван', second: 'Иванов', post: 'Frontend', company: 1, checked: false },
    { id: 2, name: 'Дина', second: 'Алероева', post: 'Designer', company: 2, checked: false },
    { id: 3, name: 'Альберт', second: 'Момотюк', post: 'Backend', company: 3, checked: false },
    { id: 4, name: 'Эмиль', second: 'Форсберг', post: 'Fullstack', company: 4, checked: false },
  ],
  companiesHeader: [ 'Название компании', 'Кол-во сотрудников', 'Адрес' ],
  employeiesHeader: [ 'Имя', 'Фамилия', 'Дожность' ],
  selectCompany: 0,
  showModal: false,
  modalAffiliation: 0
}

export const rootReducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
      case ActionType.SELECT_COMPANY:
        return {
          ...state,
          selectCompany: action.payload
        }
      case ActionType.SHOW_MODAL:
        return {
          ...state,
          showModal: true,
          modalAffiliation: action.payload
        }
      case ActionType.CLOSE_MODAL:
        return {
          ...state,
          showModal: false,
          modalAffiliation: 0
        }
      case ActionType.ADD_COMPANY:
        return {
          ...state,
          companies: action.payload
        }
      case ActionType.ADD_EMPLOYEE:
        return {
          ...state,
          employeies: action.payload
        }
      case ActionType.REMOVE_COMPANY:
        return {
          ...state,
          companies: action.payload.companies,
          selectCompany: action.payload.selectCompany
        }
      case ActionType.REMOVE_EMPLOYEE:
        return {
          ...state,
          employeies: action.payload
        }

      default: return state
  }
}