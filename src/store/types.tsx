export interface Company {
  id: number,
  name: string,
  address: string,
  employeeCount: number,
  checked: boolean
}

export interface Employee {
  id: number,
  name: string,
  second: string,
  post: string,
  company: number,
  checked: boolean
}

export interface State {
  companies: Company[],
  employeies: Employee[],
  companiesHeader: string[],
  employeiesHeader: string[],
  selectCompany: number,
  showModal: boolean,
  modalAffiliation: 0 | 1 | 2
}

export enum ActionType {
  SELECT_COMPANY = 'SELECT_COMPANY',
  ADD_COMPANY = 'ADD_COMPANY',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  REMOVE_COMPANY = 'REMOVE_COMPANY',
  REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE',
  SHOW_MODAL = 'SHOW_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL'
}

export interface selectCompany {
  type: ActionType.SELECT_COMPANY,
  payload: number
}

export interface showModal {
  type: ActionType.SHOW_MODAL
  payload: 1 | 2
}

export interface closeModal {
  type: ActionType.CLOSE_MODAL
}

export interface addCompany {
  type: ActionType.ADD_COMPANY,
  payload: Company[]
}

export interface addEmployee {
  type: ActionType.ADD_EMPLOYEE,
  payload: Employee[]
}

export interface removeCompany {
  type: ActionType.REMOVE_COMPANY,
  payload: { 
    companies: Company[],
    selectCompany: number
  }
}
export interface removeEmployee {
  type: ActionType.REMOVE_EMPLOYEE,
  payload: Employee[]
}

export type Action = selectCompany | showModal | closeModal | addCompany | addEmployee | removeCompany | removeEmployee;