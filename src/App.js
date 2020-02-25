import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';


const Button = styled.button`
  background:transparent;
  border-radius: 3px;
  border: 2px solid #4b6286;
  color:#4b6286;
  font-family:Impact;
  margin-left: 335px;
  padding: 0.25em 1em;
`
const Main = styled.option`
  width: 50px;
  height:5px;
  color:white;
  background-color:#4b6286;
  border-radius:3px;
  border: 1px solid;
`
const Second = styled.option`
  border-radius:3px;
  border:1px solid;
  width: 50px;
  height:5px;
  color:white;
  background-color:#4b6286;
`
const Input = styled.input`
  height:35px;
  width: 175px;
`
const Div = styled.div`
  border: 4px solid #4b6286;
  border-radius:25px;
  width:750px;;
  height:500px;
  font-family:impact;
  margin:15%;
`
const Card = styled.div`
  display:flex;
  justify-content:center;
  height:325px;
  width:350px;
  background:#4b6286;
  border-radius:15px;
  margin-left:195px;
`
const H2 = styled.h2`
  width: 240px;
  border:2px solid white;
  color:white;
  border-radius:25px;
  padding:35px;
  display:flex;
  text-align:center;
`
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  `
const DropdownMenu = styled.div`
    position: relative;
    display: flex;
    &:hover ${DropdownContent} {
      display: flex;
      flex-flow: column;
      margin-top:10px;
    }
  `
const Center = styled.div`
    display:flex;
    justify-content: space-around;
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
    Axios
      .get(`https://mmsg-project.herokuapp.com/conversion/${currency.base_currency}/${currency.target_currency}/${currency.base_amount}`)
      .then((response) => {
        console.log('im right here', response)
        setCurrency({ ...currency, target_amount: response.data.finalAmount })
      }).catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
  }, [currency.target_amount])


  return (
    <Div className="Converter">
      <Center>
        <DropdownMenu>
          <span >
            Base Currency
        </span>
          <DropdownContent>
            <Main onClick={changeBase} value="USD">USD</Main >
            <Main onClick={changeBase} value="JPY">JPY</Main >
            <Main onClick={changeBase} value="BGN">BGN</Main >
            <Main onClick={changeBase} value="CZK">CZK</Main >
            <Main onClick={changeBase} value="DKK">DKK</Main >
            <Main onClick={changeBase} value="GBP">GBP</Main >
            <Main onClick={changeBase} value="HUF">HUF</Main >
            <Main onClick={changeBase} value="PLN">PLN</Main >
            <Main onClick={changeBase} value="RON">RON</Main >
            <Main onClick={changeBase} value="SEK">SEK</Main >
            <Main onClick={changeBase} value="CHF">CHF</Main >
            <Main onClick={changeBase} value="ISK">ISK</Main >
            <Main onClick={changeBase} value="NOK">NOK</Main >
            <Main onClick={changeBase} value="HRK">HRK</Main >
            <Main onClick={changeBase} value="RUB">RUB</Main >
            <Main onClick={changeBase} value="TRY">TRY</Main >
            <Main onClick={changeBase} value="AUD">AUD</Main >
            <Main onClick={changeBase} value="BRL">BRL</Main >
            <Main onClick={changeBase} value="CAD">CAD</Main >
            <Main onClick={changeBase} value="CNY">CNY</Main >
            <Main onClick={changeBase} value="HKD">HKD</Main >
            <Main onClick={changeBase} value="IDR">IDR</Main >
            <Main onClick={changeBase} value="ILS">ILS</Main >
            <Main onClick={changeBase} value="INR">INR</Main >
            <Main onClick={changeBase} value="KRW">KRW</Main >
            <Main onClick={changeBase} value="MXN">MXN</Main >
            <Main onClick={changeBase} value="MYR">MYR</Main >
            <Main onClick={changeBase} value="NZD">NZD</Main >
            <Main onClick={changeBase} value="PHP">PHP</Main >
            <Main onClick={changeBase} value="SGD">SGD</Main >
            <Main onClick={changeBase} value="THB">THB</Main >
            <Main onClick={changeBase} value="ZAR">ZAR</Main >
            <Main onClick={changeBase} value="EUR">EUR</Main >
          </DropdownContent>
        </DropdownMenu>
        <br></br>
        <DropdownMenu>
          <span >
            Target Currency
        </span>
          <DropdownContent>
            <Second onClick={changeTarget} value="USD">USD</Second >
            <Second onClick={changeTarget} value="JPY">JPY</Second >
            <Second onClick={changeTarget} value="BGN">BGN</Second >
            <Second onClick={changeTarget} value="CZK">CZK</Second >
            <Second onClick={changeTarget} value="DKK">DKK</Second >
            <Second onClick={changeTarget} value="GBP">GBP</Second >
            <Second onClick={changeTarget} value="HUF">HUF</Second >
            <Second onClick={changeTarget} value="PLN">PLN</Second >
            <Second onClick={changeTarget} value="RON">RON</Second >
            <Second onClick={changeTarget} value="SEK">SEK</Second >
            <Second onClick={changeTarget} value="CHF">CHF</Second >
            <Second onClick={changeTarget} value="ISK">ISK</Second >
            <Second onClick={changeTarget} value="NOK">NOK</Second >
            <Second onClick={changeTarget} value="HRK">HRK</Second >
            <Second onClick={changeTarget} value="RUB">RUB</Second >
            <Second onClick={changeTarget} value="TRY">TRY</Second >
            <Second onClick={changeTarget} value="AUD">AUD</Second >
            <Second onClick={changeTarget} value="BRL">BRL</Second >
            <Second onClick={changeTarget} value="CAD">CAD</Second >
            <Second onClick={changeTarget} value="CNY">CNY</Second >
            <Second onClick={changeTarget} value="HKD">HKD</Second >
            <Second onClick={changeTarget} value="IDR">IDR</Second >
            <Second onClick={changeTarget} value="ILS">ILS</Second >
            <Second onClick={changeTarget} value="INR">INR</Second >
            <Second onClick={changeTarget} value="KRW">KRW</Second >
            <Second onClick={changeTarget} value="MXN">MXN</Second >
            <Second onClick={changeTarget} value="MYR">MYR</Second >
            <Second onClick={changeTarget} value="NZD">NZD</Second >
            <Second onClick={changeTarget} value="PHP">PHP</Second >
            <Second onClick={changeTarget} value="SGD">SGD</Second >
            <Second onClick={changeTarget} value="THB">THB</Second >
            <Second onClick={changeTarget} value="ZAR">ZAR</Second >
            <Second onClick={changeTarget} value="EUR">EUR</Second >
          </DropdownContent>
        </DropdownMenu>
        <br></br>
        <form>
          <Input
            type='number'
            placeholder='The amount you want to convert'
            name='base_amount'
            value={currency.base_amount}
            onChange={handleChange} />
        </form>
      </Center>
      <br></br>
      <Button type='submit'
        onClick={submitHandler}
      >Submit</Button>
      <Card>
        <H2>
          The Conversion Rate
          <br></br>
          {currency.base_amount}
          <br></br>
          {currency.base_currency}
          <br></br>
          <br></br>
          is equal to
          <br></br>
          <br></br>
          {currency.target_amount}
          <br></br>
          {currency.target_currency}
          <br></br>
        </H2>
      </Card>
    </Div >
  );
}
export default App;


