import React, { useState } from 'react'
import { FormEmployeeInterface } from './types'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../store/hooks/useTypeSelector'
import { ActionType } from '../../store/types'

import './Form.scss'

export const FormEmployee: React.FC<FormEmployeeInterface> = () => {
  const { companies, employeies, selectCompany } = useTypedSelector((state) => state.root);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    second: '',
    post: ''
  })
  const [message, setMessage] = useState('')

  const addEmployeeHandler = async (e: any) => {
    e.preventDefault()
    if(form.name.length !== 0 && form.second.length !== 0 && form.post.length !== 0) {
      const lastIndex = employeies.length
      const tmp = {
        id: lastIndex + 1,
        name: form.name,
        second: form.second,
        post: form.post,
        company: selectCompany,
        checked: false
      }
      const newEmployeies = employeies.concat(tmp)      
      await dispatch({ type: ActionType.ADD_EMPLOYEE, payload: newEmployeies })

      const company = companies.filter((item) => item.id === selectCompany)[0]
      company.employeeCount = company.employeeCount + 1      
      const newCompanies = companies.map(item => {
        if(item.id === company.id) {
          return company
        } else {
          return item
        }
      })
      await dispatch({ type: ActionType.ADD_COMPANY, payload: newCompanies })
      
      setForm({
        name: '',
        second: '',
        post: ''
      })
    } else {
      setMessage('Заполните поля!')
    }
  }

  return (
    <div className='form'>
      <div className='form__group'>
        <input type='text' placeholder='Введите имя сотрудника...' value={ form.name } onChange={ (e) => setForm({ ...form, name: e.target.value }) } />
      </div>
      <div className='form__group'>
        <input type='text' placeholder='Введите фамилию сотрудника...' value={ form.second } onChange={ (e) => setForm({ ...form, second: e.target.value }) } />
      </div>
      <div className='form__group'>
        <input type='text' placeholder='Введите должность сотрудника...' value={ form.post } onChange={ (e) => setForm({ ...form, post: e.target.value }) } />
      </div>
      <div className='form__group'>
        <button disabled={ form.name.length !== 0 && form.second.length !== 0 && form.post.length !== 0 ? false : true } onClick={ addEmployeeHandler }>Добавить</button>
      </div>
      {
        message !== '' ? <div className='form__message'>{ message }</div> : <></>
      }
    </div>
  )
}