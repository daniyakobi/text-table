import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/hooks/useTypeSelector';
import { TableCompanyInterface } from './types'
import { ActionType } from '../../store/types';

export const TableCompanyRow: React.FC<TableCompanyInterface> = ({ item }) => {
  const { selectCompany, companies } = useTypedSelector((state) => state.root);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: item.name,
    address: item.address
  })

  const selectCompanyHandler = async () => {
    await dispatch({ type: ActionType.SELECT_COMPANY, payload: item.id })
  }

  const checkedHandler = async () => {
    const company = companies.filter((com) => com.id === item.id)[0]
    company.checked = !item.checked     
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
    <div 
      className={ `table__row ${ item.checked ? 'table__row-checked' : '' } ${ selectCompany === item.id ? 'table__row-selected' : '' }` } 
      onClick={ () => selectCompanyHandler() }
    >
      <div className='table__cell'>
        <input type='checkbox' checked={ item.checked } onChange={ () => checkedHandler() } />
      </div>
      <div className='table__cell'>
        <input type='text' value={ form.name } onChange={ (e) => setForm({ ...form, name: e.target.value }) } />
      </div>
      <div className='table__cell'>
        { item.employeeCount }
      </div>
      <div className='table__cell'>
      <input type='text' value={ form.address } onChange={ (e) => setForm({ ...form, address: e.target.value }) } />
      </div>
    </div>
  )
}
