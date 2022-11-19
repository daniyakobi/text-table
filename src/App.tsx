import React, { useState, useEffect } from 'react';
import { useTypedSelector } from './store/hooks/useTypeSelector';
import { Buttons } from './components/Buttons/Buttons';
import { Table } from './components/Table/Table';
import { Employee } from './store/types';
import { Modal } from './components/Modal/Modal';

import './App.scss';

function App() {
  const { companies, employeies, selectCompany, companiesHeader, employeiesHeader, showModal, modalAffiliation } = useTypedSelector((state) => state.root);
  const [ employeeTmp, setEmployeeTmp ] = useState([] as Employee[])

  useEffect(() => {
    const tmp = employeies.filter((item) => item.company === selectCompany)
    setEmployeeTmp(tmp)
  }, [selectCompany, employeies])

  return (
    <div className="App">
      <div className='container'>
        <div className='block'>
          <h2>Компании</h2>
          <Buttons affiliation={ 1 } />
          <Table headers={ companiesHeader } data={ companies } affiliation={ 1 } />
        </div>
        {
          selectCompany !== 0 ? 
            <div className='block'>
              <h2>Сотрудники</h2>
              <Buttons affiliation={ 2 } />
              <Table headers={ employeiesHeader } data={ employeeTmp } affiliation={ 2 } />
            </div>
            : <></>
        }
      </div>
      {
        showModal ? 
          <Modal affiliation={ modalAffiliation } />
          : <></>
      }
    </div>
  );
}

export default App;
