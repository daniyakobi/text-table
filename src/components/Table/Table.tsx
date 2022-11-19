import React, { useState } from 'react'
import { TableCompanyRow } from './TableCompanyRow'
import { TableEmployeeRow } from './TableEmployeeRow'
import { TableInterface } from './types'

import './Table.scss'
import { useTypedSelector } from '../../store/hooks/useTypeSelector'
import { useDispatch } from 'react-redux'

export const Table: React.FC<TableInterface> = ({ headers, data, affiliation }) => {
  const { employeies, companies } = useTypedSelector((state) => state.root);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false)

  const selectAllHandler = () => {
    setChecked(!checked)
    if(affiliation === 1) {
      companies.map((item) => {
        const tmp = item
        item.checked = !checked
        return tmp
      })
    } else {
      employeies.map((item) => {
        const tmp = item
        item.checked = !checked
        return tmp
      })
    }
  }

  return (
    <div className='block__table table'>
      <div className='table__header table__row'>
        <div className='table__cell'>
          <input type='checkbox' checked={ checked } onChange={ () => selectAllHandler() } />
        </div>
        {
          headers.map((item) => {
            return (
              <div className='table__cell' key={ item } >
                { item }
              </div>
            )
          })
        }
      </div>
      <div className='table__body'>
        {
          data.map((item: any) => {
            if(affiliation === 1) {
              return (
                <TableCompanyRow item={ item } key={ item.id } />
              )
            } else {
              return (
                <TableEmployeeRow item={ item } key={ item.id } />
              )
            }
          })
        }
      </div>
    </div>
  )
}
