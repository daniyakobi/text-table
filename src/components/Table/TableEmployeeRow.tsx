import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/hooks/useTypeSelector';
import { ActionType } from '../../store/types';
import { TableEmployeeInterface } from './types'

export const TableEmployeeRow: React.FC<TableEmployeeInterface> = ({ item }) => {
  const { employeies } = useTypedSelector((state) => state.root);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: item.name,
    second: item.second,
    post: item.post
  })
  
  const checkedHandler = async () => {
    const employee = employeies.filter((emp) => emp.id === item.id)[0]
    employee.checked = !item.checked     
    const newEmployeies = employeies.map(item => {
      if(item.id === employee.id) {
        return employee
      } else {
        return item
      }
    })
    await dispatch({ type: ActionType.ADD_EMPLOYEE, payload: newEmployeies })
  }

  return (
    <div className={ `table__row ${ item.checked ? 'table__row-checked' : '' }` } key={ item.id } >
      <div className='table__cell'>
        <input type='checkbox' checked={ item.checked } onChange={ () => checkedHandler() } />
      </div>
      <div className='table__cell'>
        <input type='text' value={ form.name } onChange={ (e) => setForm({ ...form, name: e.target.value }) } />
      </div>
      <div className='table__cell'>
        <input type='text' value={ form.second } onChange={ (e) => setForm({ ...form, second: e.target.value }) } />
      </div>
      <div className='table__cell'>
        <input type='text' value={ form.post } onChange={ (e) => setForm({ ...form, post: e.target.value }) } />
      </div>
    </div>
  )
}
