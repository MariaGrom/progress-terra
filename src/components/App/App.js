import React from 'react';
import './App.css';
import { url_token, key, data, url_bonus } from '../../utils/config';
import StatusBar from '../StatusBar/StatusBar';
import BonusCard from '../BonusCard/BonusCard';

function App() {

  const [token, setToken] = React.useState(null);
  const [forBurningQuantity, setForBurningQuantity] = React.useState('');
  const [currentQuantity, setCurrentQuantity] = React.useState('');
  const [dateBurning, setDateBurning] = React.useState('');


  // Запрос получения token
  const register = () => {
    fetch(`${url_token}`, {
      method: 'POST',
      headers: {
        'AccessKey': key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log('ERROR')
          throw Error
        }
      })
      .then(data => {
        setToken(data.accessToken)
      })
      .catch(error => {
        console.log('ошибка', error)
      })
  }

  React.useEffect(() => {
    register()
  }, [])


  // Запрос на получение бонусов
  const getBonus = (token) => {
    fetch(`${url_bonus}/${token}`, {
      headers: {
        'AccessKey': key,
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log('ERROR')
          throw Error
        }
      })
      .then(data => {
        setCurrentQuantity(data.data.currentQuantity);
        setForBurningQuantity(data.data.forBurningQuantity);
        setDateBurning(data.data.dateBurning)
      })
      .catch(error => {
        console.log('ошибка', error)
      })
  }

  React.useEffect(() => {
    if (token) {
      getBonus(token)
    }
  }, [token])

  // Преобразование даты в формат макета
  const newArr = dateBurning.split('').splice(5, 5)
  // ======== Меняем местами значения даты =====
  let num1 = newArr[0]
  newArr[0] = newArr[3]
  newArr[3] = num1
  let num2 = newArr[1]
  newArr[1] = newArr[4]
  newArr[4] = num2
  const newDate = newArr.join('').replace('-', '.')

  return (
    <main className='App'>
      <StatusBar />
        <div className='App-header'>
          <div className='App-logo'>ЛОГОТИП</div>
          <button className='App-button'></button>
        </div>
        <div className='App-footer'></div>
        <BonusCard
          currentQuantity={currentQuantity}
          newDate={newDate}
          forBurningQuantity={forBurningQuantity}
        />
      </main>

  );
}

export default App;
