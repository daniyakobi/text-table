import React, { useState } from 'react'
import { FormCompanyInterface } from './types'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../store/hooks/useTypeSelector'
import { ActionType } from '../../store/types'

import './Form.scss'

export const FormCompany: React.FC<FormCompanyInterface> = () => {
  const { companies } = useTypedSelector((state) => state.root);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    address: ''
  })
  const [message, setMessage] = useState('')

  const addCompanyHandler = async (e: any) => {
    e.preventDefault()
    if(form.name.length !== 0 && form.address.length !== 0) {
      const lastIndex = companies.length
      const tmp = {
        id: lastIndex + 1,
        name: form.name,
        address: form.address,
        employeeCount: 0,
        checked: false
      }
      const newCompanies = companies.concat(tmp)
      await dispatch({ type: ActionType.ADD_COMPANY, payload: newCompanies })
      
      setForm({
        name: '',
        address: ''
      })
    } else {
      setMessage('Заполните поля!')
    }
  }

  return (
    <div className='form'>
      <div className='form__group'>
        <input type='text' placeholder='Введите название компании...' value={ form.name } onChange={ (e) => setForm({ ...form, name: e.target.value }) } />
      </div>
      <div className='form__group'>
        <input type='text' placeholder='Введите адес компании...' value={ form.address } onChange={ (e) => setForm({ ...form, address: e.target.value }) } />
      </div>
      <div className='form__group'>
        <button disabled={ form.name.length !== 0 && form.address.length !== 0 ? false : true } onClick={ addCompanyHandler }>Добавить</button>
      </div>
      {
        message !== '' ? <div className='form__message'>{ message }</div> : <></>
      }
    </div>
  )
}
