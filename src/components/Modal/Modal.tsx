import React from 'react'
import { ModalInterface } from './types'
import { useTypedSelector } from '../../store/hooks/useTypeSelector'
import { useDispatch } from 'react-redux'
import { ActionType } from '../../store/types'
import { FormCompany } from '../Form/FormCompany'
import { FormEmployee } from '../Form/FormEmployee'

import './Modal.scss'

export const Modal: React.FC<ModalInterface> = ({ affiliation }) => {
  const { selectCompany } = useTypedSelector((state) => state.root);
  const dispatch = useDispatch();

  const closeModalHandler = async () => {
    await dispatch({ type: ActionType.CLOSE_MODAL })
  }

  return (
    <div className='modal'>
      <h3>
        <div>{ affiliation === 1 ? 'Добавление компании' : 'Добавление сотрудника' }</div>
        <div className='modal__close' onClick={ closeModalHandler } >Закрыть</div>
      </h3>
      {
        affiliation === 1 ? 
          <FormCompany />
          :
          <FormEmployee selectCompany={ selectCompany } />
      }
    </div>
  )
}
