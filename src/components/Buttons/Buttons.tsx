import React from 'react'
import { ButtonsInterface } from './types'
import { useDispatch } from 'react-redux'
import { ActionType } from '../../store/types'

import './Buttons.scss'
import { useTypedSelector } from '../../store/hooks/useTypeSelector'

export const Buttons: React.FC<ButtonsInterface> = ({ affiliation }) => {
  const { companies, employeies, selectCompany } = useTypedSelector((state) => state.root);
  const dispatch = useDispatch();
  
  const showModalCompanyHandler = async () => {
    await dispatch({ type: ActionType.SHOW_MODAL, payload: 1 })
  }

  const showModalEmployeeHandler = async () => {
    await dispatch({ type: ActionType.SHOW_MODAL, payload: 2 })
  }

  const removeCompanyHandler = async () => {
    let sel = 0
    const newCompanies = companies.filter((item) => !item.checked)
    newCompanies.forEach((item) => {
      if(item.id === selectCompany) {
        sel = selectCompany
      } 
    })
    const data = {
      companies: newCompanies,
      selectCompany: sel
    }
    await dispatch({ type: ActionType.REMOVE_COMPANY, payload: data })
  }

  const removeEmployeeHandler = async () => {
    const newEmployeies = employeies.filter((item) => !item.checked)
    await dispatch({ type: ActionType.ADD_EMPLOYEE, payload: newEmployeies })
    
    const company = companies.filter((item) => item.id === selectCompany)[0]
    company.employeeCount = company.employeeCount - 1      
    const newCompanies = companies.map(item => {
      if(item.id === company.id) {
        return company
      } else {
        return item
      }
    })
    await dispatch({ type: ActionType.ADD_COMPANY, payload: newCompanies })
  }

  return (
    <div className='block__buttons buttons'>
      {
        affiliation === 1 ?
          <>
            <button onClick={ showModalCompanyHandler }>Добавить компанию</button>
            <button onClick={ removeCompanyHandler }>Удалить</button>
          </> 
          : <>
            <button onClick={ showModalEmployeeHandler }>Добавить сотрудника</button>
            <button onClick={ removeEmployeeHandler }>Удалить</button>
          </> 
      }
    </div>
  )
}