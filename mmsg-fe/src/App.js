import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color:green;
  margin-left: 150px;
  padding: 0.25em 1em;
`
const Option = styled.option`
  width: 35px;
  height:20px;
  color:blue;
  border-radius:3px;
  border: 2px solid blue;
`
const Red = styled.option`
  border-radius:3px;
  border:2px solid red;
  width: 35px;
  height:20px;
  margin-left:35px;
`
const Input = styled.input`
  margin-left:100px;
`

function App() {
  const [currency, setCurrency] = useState({
    base_currency: '',
    target_currency: '',
    base_amount: '',
    target_amount: ''
  });
  const handleChange = (e) => {
    console.log(e.target.value)
    setCurrency({ ...currency, base_amount: e.target.value })
    // console.log(typeOf(amount));
  }
  const changeBase = (e) => {
    console.log(e.target.value)
    setCurrency({ ...currency, base_currency: e.target.value })
  }

  const changeTarget = (e) => {
    console.log(e.target)
    setCurrency({ ...currency, target_currency: e.target.value })
  }


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('everything we need', currency.base_currency);
  }

  useEffect(() => {
    Axios
      .get(`https://mmsg-project.herokuapp.com/conversion/${currency.base_currency}/${currency.target_currency}/${currency.base_amount}`)
      .then((response) => {
        console.log('im right here', response)
        setCurrency.target_amount(response.data.finalAmount)
      }).catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div className="Converter">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Base Currency
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Option onClick={changeBase} value="USD">USD</Option>
          <Option onClick={changeBase} value="JPY">JPY</Option>
          <Option onClick={changeBase} value="BGN">BGN</Option>
          <Option onClick={changeBase} value="CZK">CZK</Option>
          <Option onClick={changeBase} value="DKK">DKK</Option>
          <Option onClick={changeBase} value="GBP">GBP</Option>
          <Option onClick={changeBase} value="HUF">HUF</Option>
          <Option onClick={changeBase} value="PLN">PLN</Option>
          <Option onClick={changeBase} value="RON">RON</Option>
          <Option onClick={changeBase} value="SEK">SEK</Option>
          <Option onClick={changeBase} value="CHF">CHF</Option>
          <Option onClick={changeBase} value="ISK">ISK</Option>
          <Option onClick={changeBase} value="NOK">NOK</Option>
          <Option onClick={changeBase} value="HRK">HRK</Option>
          <Option onClick={changeBase} value="RUB">RUB</Option>
          <Option onClick={changeBase} value="TRY">TRY</Option>
          <Option onClick={changeBase} value="AUD">AUD</Option>
          <Option onClick={changeBase} value="BRL">BRL</Option>
          <Option onClick={changeBase} value="CAD">CAD</Option>
          <Option onClick={changeBase} value="CNY">CNY</Option>
          <Option onClick={changeBase} value="HKD">HKD</Option>
          <Option onClick={changeBase} value="IDR">IDR</Option>
          <Option onClick={changeBase} value="ILS">ILS</Option>
          <Option onClick={changeBase} value="INR">INR</Option>
          <Option onClick={changeBase} value="KRW">KRW</Option>
          <Option onClick={changeBase} value="MXN">MXN</Option>
          <Option onClick={changeBase} value="MYR">MYR</Option>
          <Option onClick={changeBase} value="NZD">NZD</Option>
          <Option onClick={changeBase} value="PHP">PHP</Option>
          <Option onClick={changeBase} value="SGD">SGD</Option>
          <Option onClick={changeBase} value="THB">THB</Option>
          <Option onClick={changeBase} value="ZAR">ZAR</Option>
          <Option onClick={changeBase} value="EUR">EUR</Option>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Target Currency
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Red onClick={changeTarget} value="USD">USD</Red>
          <Red onClick={changeTarget} value="JPY">JPY</Red>
          <Red onClick={changeTarget} value="BGN">BGN</Red>
          <Red onClick={changeTarget} value="CZK">CZK</Red>
          <Red onClick={changeTarget} value="DKK">DKK</Red>
          <Red onClick={changeTarget} value="GBP">GBP</Red>
          <Red onClick={changeTarget} value="HUF">HUF</Red>
          <Red onClick={changeTarget} value="PLN">PLN</Red>
          <Red onClick={changeTarget} value="RON">RON</Red>
          <Red onClick={changeTarget} value="SEK">SEK</Red>
          <Red onClick={changeTarget} value="CHF">CHF</Red>
          <Red onClick={changeTarget} value="ISK">ISK</Red>
          <Red onClick={changeTarget} value="NOK">NOK</Red>
          <Red onClick={changeTarget} value="HRK">HRK</Red>
          <Red onClick={changeTarget} value="RUB">RUB</Red>
          <Red onClick={changeTarget} value="TRY">TRY</Red>
          <Red onClick={changeTarget} value="AUD">AUD</Red>
          <Red onClick={changeTarget} value="BRL">BRL</Red>
          <Red onClick={changeTarget} value="CAD">CAD</Red>
          <Red onClick={changeTarget} value="CNY">CNY</Red>
          <Red onClick={changeTarget} value="HKD">HKD</Red>
          <Red onClick={changeTarget} value="IDR">IDR</Red>
          <Red onClick={changeTarget} value="ILS">ILS</Red>
          <Red onClick={changeTarget} value="INR">INR</Red>
          <Red onClick={changeTarget} value="KRW">KRW</Red>
          <Red onClick={changeTarget} value="MXN">MXN</Red>
          <Red onClick={changeTarget} value="MYR">MYR</Red>
          <Red onClick={changeTarget} value="NZD">NZD</Red>
          <Red onClick={changeTarget} value="PHP">PHP</Red>
          <Red onClick={changeTarget} value="SGD">SGD</Red>
          <Red onClick={changeTarget} value="THB">THB</Red>
          <Red onClick={changeTarget} value="ZAR">ZAR</Red>
          <Red onClick={changeTarget} value="EUR">EUR</Red>
        </Dropdown.Menu>
      </Dropdown>

      <form>
        <Input
          type='number'
          placeholder='The amount you want to convert'
          name='base_amount'
          value={currency.base_amount}
          onChange={handleChange} />

      </form>

      <Button type='submit'
        onClick={submitHandler}
      >Submit</Button>

      <div>
        <h2>The Conversion Rate is:</h2>
        <h3>{currency.base_amount}{currency.base_currency} is equal to {currency.target_amount}{currency.target_currency}</h3>

      </div>
    </div>
  );
}

export default App;


